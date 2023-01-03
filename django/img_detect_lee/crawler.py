import numpy as np
from matplotlib import pyplot as plt
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import urllib.request
import os
from tensorflow import keras
os.environ['KMP_DUPLICATE_LIB_OK']='True'

class Crawling(object):
    def __init__(self):
        global path
        path = r'C:\Users\bitcamp\PycharmProjects\Borrow-San\django\img_detect_lee\save'
    def image_crawling(self):
        search_hand = "손 사진"   # 이미지 이름
        search_umb = "우산"   # 이미지 이름
        count = 100    # 크롤링할 이미지 개수
        save_hand = r"C:\Users\bitcamp\PycharmProjects\Borrow-San\django\img_detect_lee\save\hands"  # 이미지들을 저장할 폴더 주소
        save_umb = r"C:\Users\bitcamp\PycharmProjects\Borrow-San\django\img_detect_lee\save\umbrella"

        options = webdriver.ChromeOptions()
        options.headless = True
        options.add_argument("window-size=1920x1080")

        driver = webdriver.Chrome(options=options)  #options=options
        driver.get("https://www.google.co.kr/imghp?hl=ko&tab=wi&ogbl")
        elem = driver.find_element_by_name("q")
        elem.send_keys(search_hand)

        elem.send_keys(Keys.RETURN)

        # 페이지 끝까지 스크롤 내리기
        SCROLL_PAUSE_TIME = 1
        # 스크롤 깊이 측정하기
        last_height = driver.execute_script("return document.body.scrollHeight")

        # 스크롤 끝까지 내리기

        while True:

            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            # 페이지 로딩 기다리기
            time.sleep(SCROLL_PAUSE_TIME)
            # 더 보기 요소 있을 경우 클릭하기

            new_height = driver.execute_script("return document.body.scrollHeight")

            if new_height == last_height:

                try:
                    driver.find_element_by_css_selector(".mye4qd").click()

                except:
                    break

            last_height = new_height

        #이미지 찾고 다운받기
        images = driver.find_elements_by_css_selector(".rg_i.Q4LuWd")

        for i in range(count):

            try:
                images[i].click() # 이미지 클릭
                time.sleep(1)

                imgUrl = driver.find_element_by_css_selector(".n3VNCb").get_attribute("src")
                urllib.request.urlretrieve(imgUrl, save_hand + '/' + str(i) + ".jpg")    # 이미지 다운

            except:
                pass
        driver.close()

    def image_labeling(self):
        img = keras.preprocessing.image.load_img(r'C:\Users\bitcamp\PycharmProjects\Borrow-San\django\img_detect_lee\save\umbrella\umbrella (1).jpg', target_size=(250, 250))
        img = keras.preprocessing.image.img_to_array(img)
        print(img)

        dataset = keras.preprocessing.image_dataset_from_directory(
            path,
            seed=1,
            image_size=(100, 100),
            batch_size=32,
            shuffle=False
        )
        class_names = dataset.class_names
        print(class_names)
        print(f'type(dataset) is {type(dataset)}')
        y = np.concatenate([y for x, y in dataset], axis=0)
        x = np.concatenate([x for x, y in dataset], axis=0)
        print(y)
        plt.figure(figsize=(3, 3))
        plt.imshow(x[0].astype("uint8"))
        plt.title(class_names[y[0]])
        plt.axis("off")
        plt.figure(figsize=(3, 3))
        plt.imshow(x[-1].astype("uint8"))
        plt.title(class_names[y[-1]])
        plt.axis("off")
        plt.show()

if __name__ == '__main__':
    Crawling().image_labeling()