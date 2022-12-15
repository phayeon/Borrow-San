class Mng_BoxService:
    def __init__(self):
        pass

    def hook(self):
        self.test()

    def test(self):
        print("Mng_Box test")


if __name__ == '__main__':
    Mng_BoxService().hook()
