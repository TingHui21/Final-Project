import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('commerce.db')
c = conn.cursor()

# Create table
c.execute('''CREATE TABLE IF NOT EXISTS products (
                ProductID TEXT PRIMARY KEY,
                ProductName TEXT,
                ProductDescription TEXT,
                ProductPrice TEXT,
                Stock INTEGER,
                imageURL TEXT
             )''')

# Product data
products = [
    {"ProductID": "A001", "ProductName": "Klee Ear Buds", "ProductDescription": "These ear buds feature a Klee theme design. Buy them if you're interested!", "ProductPrice": "RM 300.00", "Stock": 5, "imageURL": "earBuds.jpg"},
    {"ProductID": "A002", "ProductName": "Klee Ear Phone", "ProductDescription": "These ear phone feature a Klee theme design. Buy them if you're interested!", "ProductPrice": "RM 450.00", "Stock": 6, "imageURL": "earPhone.jpg"},
    {"ProductID": "L001", "ProductName": "ASUS ROG Strix G15 Laptop", "ProductDescription": "This is a Republic of Gaming Laptop. You can be able to run your programme smoothly with lesser bugs.", "ProductPrice": "RM 10500.00", "Stock": 3, "imageURL": "ASUSROGStrixG15.jpg"},
    {"ProductID": "L002", "ProductName": "Dell Alienware Laptop", "ProductDescription": "This is an Dell Alienware Laptop. You can be able to run your programme smoothly with lesser bugs with cheaper price.", "ProductPrice": "RM 8500.00", "Stock": 4, "imageURL": "DellAlienware18.jpg"},
    {"ProductID": "A003", "ProductName": "NVIDIA GeForce RTX20", "ProductDescription": "This is a NVIDIA GeForce RTX20 Graphic Card. You enable to run high resolutions application by using this.", "ProductPrice": "RM 8500.00", "Stock": 6, "imageURL": "GeForceRTX20.jpg"},
    {"ProductID": "A004", "ProductName": "Keyboard with Hutao Theme", "ProductDescription": "This is a keyboard with Hutao Theme. You can be able to type words smoothly by using this. If you are Hutao lover, better to buy this!", "ProductPrice": "RM 150.00", "Stock": 1, "imageURL": "keyBoard.jpg"},
    {"ProductID": "A005", "ProductName": "Razer Cobra Pro Mouse", "ProductDescription": "This is a Razer Cobra Pro Mouse with Razer Chroma RGB. It has 11 Individually Programmable LEDS to light up the mouse.", "ProductPrice": "RM 612.60", "Stock": 4, "imageURL": "RazerCobraPro.jpg"},
    {"ProductID": "A006", "ProductName": "Kingston USB", "ProductDescription": "This is a Kingston USB. You can save alot of things inside with a small tiny USB!", "ProductPrice": "RM 100.00", "Stock": 3, "imageURL": "KingSpecUSB.jpg"},
    {"ProductID": "D001", "ProductName": "Alienware Aurora R16 Gaming Desktop", "ProductDescription": "This is an Alienware Aurora R16 Gaming Desktop.You can run alot of application and programme but it is bulky and only can place in home as well.", "ProductPrice": "RM 7499.00", "Stock": 8, "imageURL": "AlienwareAuroraR16GamingDesktop.jpg"},
    {"ProductID": "A007", "ProductName": "SD Card", "ProductDescription": "This is an Amazon Basics Micro SDXC Memory Card with Full Size Adaptor. It has read speed ip to 100 MB/s and have 512 GB space and it is black.", "ProductPrice": "RM 193.00", "Stock": 2, "imageURL": "AmazonBasicsMicroSDXCMemoryCardwithFullSizeAdaptor.jpg"},
    {"ProductID": "A008", "ProductName": "Razer Basilisk V3 Pro Mouse", "ProductDescription": "This is a Razer Basilisk V3 Pro mouse. It is glowy where you can see it in a dark place.", "ProductPrice": "RM 753.00", "Stock": 4, "imageURL": "RazerBasiliskV3Pro.jpg"},
    {"ProductID": "L003", "ProductName": "Razer Blade 14", "ProductDescription": "This is a Razer Blade 14 Laptop. You can buy it since it's cheaper than gaming laptop.", "ProductPrice": "RM 5700.00", "Stock": 3, "imageURL": "RazerBlade14.jpg"},
    {"ProductID": "L004", "ProductName": "Mac Book Air", "ProductDescription": "This is a 13 inch with M2 Chip Mac Book Air Laptop. You can use MacOS Operating System to run your program at anywhere.", "ProductPrice": "RM 4799.00", "Stock": 6, "imageURL": "MacBookAir.jpg"},
    {"ProductID": "A009", "ProductName": "Marshall Woburn Speaker", "ProductDescription": "This is a Marshall Woburn Speaker. A limited codec support overshadows the experience, but the premium Marshall Woburn III home speaker otherwise offers impressive low-end power and useful controls.", "ProductPrice": "RM 1679.00", "Stock": 3, "imageURL": "MarshallWoburnSpeaker.jpg"},
    {"ProductID": "A010", "ProductName": "Razer Huntsman V3 Pro", "ProductDescription": "This is a Razer Huntsman V3 Pro Keyboard. It will shines brightly and colourfully during night.", "ProductPrice": "RM 1180.00", "Stock": 6, "imageURL": "RazerHuntsmanV3Pro.jpg"},
    {"ProductID": "A011", "ProductName": "Logitech G740 Gaming Sensors", "ProductDescription": "This is a Logitech G740 Gaming Sensors. The 5 mm mouse pad optimized for Logitech G gaming sensors—and all the rapid movements of low-DPI gaming.", "ProductPrice": "RM 159.00", "Stock": 5, "imageURL": "LogitechG740.jpg"},
    {"ProductID": "D002", "ProductName": "i Mac", "ProductDescription": "This is a i Mac Desktop. You can use MAC Operating System to run in your home but cannot carry anywhere since it's bulky.", "ProductPrice": "RM 6299.00", "Stock": 3, "imageURL": "iMac.jpg"},
    {"ProductID": "A012", "ProductName": "Stereo Speakers Z120", "ProductDescription": "This is a Stereo Speakers Z120. You can amplify your sound with cheap price.", "ProductPrice": "RM 55.00", "Stock": 2, "imageURL": "StereoSpeakersZ120.jpg"},
    {"ProductID": "A013", "ProductName": "ViewSonic Omni VX3218C-2K Gaming Monitor", "ProductDescription": "This is a ViewSonic Omni VX3218C-2K Gaming Monitor. It is a Gaming Monitor with FreeSync Premium, Eye Care, HDMI and Display Port with Black colour outfit.", "ProductPrice": "RM 1036.00", "Stock": 7, "imageURL": "ViewSonic Omni VX3218C-2K Gaming Monitor.jpg"},
    {"ProductID": "A014", "ProductName": "Yeti Orb", "ProductDescription": "Logitech G Yeti Orb is a premium gaming microphone with LIGHTSYNC RGB, a condenser capsule optimized for game streaming, and Blue VO!CE presets that delivers best-in-class audio performance and ease of use via a simple USB connection.", "ProductPrice": "RM 289.00", "Stock": 4, "imageURL": "YetiOrb.jpg"},
]

# Add "/products/" prefix to imageURL and insert data into the table
for product in products:
    product['imageURL'] = f"/products/{product['imageURL']}"
    c.execute('''INSERT INTO products (ProductID, ProductName, ProductDescription, ProductPrice, Stock, imageURL) 
                 VALUES (?, ?, ?, ?, ?, ?)''', 
              (product['ProductID'], product['ProductName'], product['ProductDescription'], product['ProductPrice'], product['Stock'], product['imageURL']))

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Data inserted successfully.")
