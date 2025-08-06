from bs4 import BeautifulSoup
import json as j

data = None
with open("./templates/conponents.html","r", encoding="utf-8") as file:
    data = file.read()

soup = BeautifulSoup(data, "html.parser")
templates = soup.find_all(class_="templatediv")

organized = {}
with open("templates.json", "r") as file:
    organized = j.load(file)
for index, template in enumerate(templates, start=30):
    organized[f"template{index}"] = str(template)

with open("templates.json", "w") as file:
    j.dump(organized, file, indent=4)

print("Automation done")
