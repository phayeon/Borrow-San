import cv2
import numpy as np
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import urllib.request
import os
import tensorflow.keras as keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.python.keras.callbacks import ModelCheckpoint


class preprocessing(object):
    def __init__(self):
        global img, data_path, save_path, img_size, flags

        data_path = r'C:\Users\AIA\PycharmProjects\Borrow-San\django\cv\model\data'
        save_path = r'C:\Users\AIA\PycharmProjects\Borrow-San\django\cv\model\save'

        img_size = (0, 0)
        flags = cv2.COLOR_BGR2RGB

    # https://velog.io/@jaehyeong/OpenCV%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B8%B0%EC%B4%88-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%98%EB%A6%AC-with-Python
    # 위 링크 참고

    def hook(self):
        self.img_flags(data_path)
        self.resize()
        self.canny_edge()
        self.save_img()


    def img_flags(self, folderPath):
        global img
        print("이미지 확인 중")
        filePath = [os.path.join(folderPath, i) for i in os.listdir(folderPath)]
        img = [cv2.imread(i, flags=flags) for i in filePath]
        return img

    def spec(self):
        self.img_flags(flags=cv2.COLOR_BGR2RGB, filename=None)
        print(f'타입 확인 :{type(img)}')
        print(f'이미지 사이즈 :{img.shape}')
        print(f'행렬 출력 :{img}')

    def resize(self):
        global img_resize
        print("이미지 리사이즈 중")
        img_resize = [cv2.resize(i, img_size, fx=1, fy=1) for i in img]
        '''
        fig, ax = plt.subplots(1, 2, figsize=(10, 5))
        ax[0].imshow(img, cmap='gray')
        ax[0].set_title('Original Image')
        ax[1].imshow(img_resize, cmap='gray')
        ax[1].set_title('Resized Image')
        '''
        return img_resize

    def canny_edge(self):
        global img_canny
        print("엣지 작업 중")
        img_canny = [cv2.Canny(i, 50, 150) for i in img_resize]
        # plt.imshow(img_canny, cmap='gray')
        return img_canny

    def save_img(self):
        print("이미지 저장 중")
        print(f'{save_path}\\')
        [cv2.imwrite(f'{save_path}\\{i}.jpg', j) for i, j in enumerate(img_canny)]


class Modelling(object):
    def __init__(self):
        global train_path, test_path, save_path, umbrella_True_train, umbrella_False_train,\
            batchsize, img_height, img_width

        data_path = r'C:\Users\AIA\PycharmProjects\Borrow-San\django\cv\model\data'
        save_path = r'C:\Users\AIA\PycharmProjects\Borrow-San\django\cv\model\save'

        train_path = f'{data_path}\\train'
        test_path = f'{data_path}\\test'

        umbrella_True_train = f'{train_path}\\umbrella_True'
        umbrella_False_train = f'{train_path}\\umbrella_False'

        batchsize = 32
        img_height = 100
        img_width = 100

    def hook(self):
        self.learn_model()
        self.show_model_predict()
        self.test_predict()

    def show_umbrella(self):
        img = keras.preprocessing.image.load_img \
            (f'{umbrella_True_train}\\84.jpg')

        class_name = os.listdir(train_path)

        plt.figure(figsize=(3, 3))
        plt.imshow(img)
        plt.title(class_name[1])
        plt.axis("off")
        plt.show()

    def dateset_concat(self):
        global x, y, class_names, train_ds, val_ds, test_ds, test_ds1

        train_ds = keras.preprocessing.image_dataset_from_directory(
            train_path, validation_split=0.3, subset="validation", seed=1, image_size=(img_height, img_width),
            batch_size=batchsize)
        val_ds = keras.preprocessing.image_dataset_from_directory(
            train_path, validation_split=0.3, subset="validation", seed=1, image_size=(img_height, img_width),
            batch_size=batchsize)
        class_names = train_ds.class_names
        test_ds = keras.preprocessing.image_dataset_from_directory(
            test_path, seed=1, image_size=(img_height, img_width), batch_size=batchsize)
        test_ds1 = keras.preprocessing.image_dataset_from_directory(
            test_path, seed=1, image_size=(img_height, img_width), batch_size=batchsize, shuffle=False)

        y = np.concatenate([y for x, y in test_ds], axis=0)
        y = np.concatenate([y for x, y in test_ds1], axis=0)
        x = np.concatenate([x for x, y in test_ds1], axis=0)

    def show_title_img(self):
        self.dateset_concat()
        plt.figure(figsize=(3, 3))
        plt.imshow(x[-1].astype("uint8"))
        plt.title(class_names[y[-1]])
        plt.axis("off")
        plt.show()

    def modify_prefetch(self):
        global train_p, val_p, test_p

        self.dateset_concat()
        BUFFER_SIZE = 10000
        AUTOTUNE = tf.data.experimental.AUTOTUNE

        train_p = train_ds.cache().shuffle(BUFFER_SIZE).prefetch(buffer_size=AUTOTUNE)
        val_p = val_ds.cache().prefetch(buffer_size=AUTOTUNE)
        test_p = test_ds.cache().prefetch(buffer_size=AUTOTUNE)

    def create_cnn_model(self):
        global model
        num_classes = 5
        model = tf.keras.Sequential([
            layers.experimental.preprocessing.Rescaling(1./255, input_shape=(img_height,
                                                                             img_width, 3)),
            layers.Conv2D(16, 3, padding='same', activation='relu'),
            layers.MaxPooling2D(2),
            layers.Dropout(.50),
            layers.Conv2D(32, 2, padding='same', activation='relu'),
            layers.MaxPooling2D(2),
            layers.Dropout(.50),
            layers.Flatten(),
            layers.Dense(500, activation='relu'),
            layers.Dropout(.50),
            layers.Dense(num_classes, activation='softmax')
        ])
        model.compile(
            optimizer='adam',
            loss=tf.losses.SparseCategoricalCrossentropy(),
            metrics=['accuracy']
        )

    def learn_model(self):
        global history
        self.modify_prefetch()
        self.create_cnn_model()
        checkpointer = ModelCheckpoint(f'{save_path}\\CNNclassifier.h5',
                                       save_best_only=True)
        early_stopping_cb = keras.callbacks.EarlyStopping(patience=5,
                                                          monitor='val_accuracy',
                                                          restore_best_weights=True)
        epochs = 10
        history = model.fit(
            train_p,
            batch_size=batchsize,
            validation_data=val_ds,
            epochs=epochs,
            callbacks=[checkpointer]
        )

    def show_model_graph(self):
        self.learn_model()
        epoch_num = int(input("epoch 횟수 : "))

        acc = history.history['accuracy']
        val_acc = history.history['val_accuracy']
        loss = history.history['loss']
        val_loss = history.history['val_loss']
        epochs_range = range(1, epoch_num+1)

        plt.figure(figsize=(10, 5))
        plt.subplot(121)
        plt.plot(epochs_range, acc, label='Training Accuracy')
        plt.plot(epochs_range, val_acc, label='Validation Accuracy')
        plt.legend(loc='lower right')
        plt.title('Training and Validation Accuracy')

        plt.subplot(122)
        plt.plot(epochs_range, loss, label='Training Loss')
        plt.plot(epochs_range, val_loss, label='Validation Loss')
        plt.legend(loc='upper right')
        plt.title('Training and Validation Loss')

        plt.show()

    def load_weights(self):
        self.modify_prefetch()
        self.create_cnn_model()
        model.load_weights(f'{save_path}\\CNNclassifier.h5')

    def show_model_predict(self):
        self.load_weights()
        test_loss, test_acc = model.evaluate(test_ds)

        print("test loss : ", test_loss)
        print("test acc : ", test_acc)

    def test_predict(self):
        self.load_weights()
        predictions = model.predict(test_ds1)
        score1 = tf.nn.softmax(predictions[0])
        score2 = tf.nn.softmax(predictions[-1])

        print(type(predictions[-1]))
        print(f"이미지는 '{class_names[np.argmax(score1)]}'에 속하며,"
              f" {round(100 * np.max(score1),2)} 확률로 일치합니다.")
        print(f"이미지는 '{class_names[np.argmax(score2)]}'에 속하며,"
              f" {round(100 * np.max(score2),2)} 확률로 일치합니다.")


if __name__ == '__main__':
    # preprocessing().hook()
    Modelling().hook()
