import ssl
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import random
import string
import time
import os
import json
import ctypes
import sys
from colorama import Fore, Back, Style
from pystyle import Colorate, Colors, Center
import requests

### KEYS ###
NOPECHA_KEY = 'I-'
capmonster_key = ''
### KEYS ###

### DISCORD WEBHOOK ###
webhook = 'https://discord.com/api/webhooks/1192267982727024780/u5UfG-oLyAg2eUWYEpR9XHmLFyXbg82G8tCZjYe0sMrYLpuvif4gtr9s58mJqYqS15Rc'
### DISCORD WEBHOOK ###

### DISCORD BOT ###
bot = ''
### DISCORD BOT ###

accnumber = 0

# Get account number from acc.txt
with open("./extra/acc.txt", "r") as f:
    accnumber = f.read()

def clear():
    print()
    os.system('cls' if os.name == 'nt' else 'clear')

def randomNumber(length):
    numbers = string.digits
    return ''.join(random.choice(numbers) for i in range(length))

def randomString(length):
    letters = string.ascii_lowercase + string.digits
    return ''.join(random.choice(letters) for i in range(length))

def getUsername():
    if rndd == "true":
        # get a random username from usernames.txt using random module
        with open("./extra/usernames.txt", "r") as f:
            usernamess = f.read().splitlines()
            usernameesz = random.choice(usernamess)
            username21 = usernameesz + randomNumber(4)
            return username21
    elif rndd == "txt":
        with open("./extra/usernames.txt", "r") as f:
            usernamess = f.read().splitlines()
            usernameesz = random.choice(usernamess)
            username21 = usernameesz + randomNumber(4)
            return username21
    else:
        return jujuname

# def getUsername2():
#     # get the first username from available and remove it from the file
#     with open("./available.txt", "r") as f:
#         usernamess = f.read().splitlines()
#         usernameesz = usernamess[0]

#         # remove the first username from usernames2.txt
#         with open("./available.txt", "w") as f:
#             for line in usernamess[1:]:
#                 f.write(line + "\n")
#         return usernameesz

error = f"    {Fore.LIGHTYELLOW_EX}[{Fore.LIGHTRED_EX}!{Fore.LIGHTYELLOW_EX}]{Fore.RESET}"


success = f"    {Fore.LIGHTYELLOW_EX}[{Fore.LIGHTGREEN_EX}+{Fore.LIGHTYELLOW_EX}]{Fore.RESET}"


info = f"    {Fore.LIGHTYELLOW_EX}[{Fore.LIGHTBLUE_EX}~{Fore.LIGHTYELLOW_EX}]{Fore.RESET}"

def main():
    global counter
    counter = 0
    time.sleep(1)
    clear()
    banner = Center.XCenter(Colorate.Vertical(Colors.cyan_to_green, """

    ██████╗░░█████╗░██████╗░██╗░░░░░░█████╗░██╗░░██╗  ░██████╗░███████╗███╗░░██╗
    ██╔══██╗██╔══██╗██╔══██╗██║░░░░░██╔══██╗╚██╗██╔╝  ██╔════╝░██╔════╝████╗░██║
    ██████╔╝██║░░██║██████╦╝██║░░░░░██║░░██║░╚███╔╝░  ██║░░██╗░█████╗░░██╔██╗██║
    ██╔══██╗██║░░██║██╔══██╗██║░░░░░██║░░██║░██╔██╗░  ██║░░╚██╗██╔══╝░░██║╚████║
    ██║░░██║╚█████╔╝██████╦╝███████╗╚█████╔╝██╔╝╚██╗  ╚██████╔╝███████╗██║░╚███║
    ╚═╝░░╚═╝░╚════╝░╚═════╝░╚══════╝░╚════╝░╚═╝░░╚═╝  ░╚═════╝░╚══════╝╚═╝░░╚══╝

"""))
    print(banner)
    print(Center.XCenter(f"""{Fore.LIGHTRED_EX}
    >> {Fore.LIGHTCYAN_EX}Made By 3rr0r {Fore.LIGHTRED_EX}
    >> {Fore.LIGHTCYAN_EX}Version 2.0 [PRIVATE] {Fore.LIGHTRED_EX}
    >> {Fore.LIGHTCYAN_EX}Last Update: Funcaptcha Bypass {Fore.LIGHTRED_EX}
    >> {Fore.LIGHTCYAN_EX}Current Update: Made The UI Better - Added New Features And Removed The Buggy Ones {Fore.LIGHTRED_EX}
    >> {Fore.LIGHTCYAN_EX}Next Update: IDK {Fore.LIGHTRED_EX}
    >> {Fore.LIGHTCYAN_EX}Generating {Fore.LIGHTRED_EX}{countz} {Fore.LIGHTCYAN_EX}Accounts{Fore.RESET}

    """))

    for i in range(countz):
        ctypes.windll.kernel32.SetConsoleTitleW(f"Roblox Account Generator By 3rr0r | {counter}/{countz} Accounts Generated")
        # Get account number from acc.txt
        with open("./extra/acc.txt", "r") as f:
            accnumber = f.read()
        if rndd == "true":
            # username1 = "3RR_" + accnumber
            username1 = getUsername()
            amount_a = len(username1)
            if amount_a > 19:
                print(f"{error} {Fore.LIGHTRED_EX}Username is too long, skipping...{Fore.RESET}")
                driver.quit()
                continue
            else:
                pass
        else:
            how_many = len(jujuname)
            if how_many > 14:
                print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Username is too long! (Max 14 Characters Allowed)"))
                input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}Press Enter to continue..."))
                time.sleep(1)
                clear()
                starter()
            else:
                # username1 = "3RR_" + accnumber
                username1 = getUsername()

        options = Options()
        #options.add_argument("log-level=3")
        #options.add_argument("--headless")
        # options.add_argument("--proxy-server=http://149.6.162.2:9999")
        options.add_experimental_option('excludeSwitches', ['enable-logging'])
        if NOPECHA_KEY == '' and capmonster_key == '':
            print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Error: {Fore.LIGHTCYAN_EX}Please Enter A Captcha Solver Key! Capmonster & Nopecha supported!{Fore.RESET}"))
        if NOPECHA_KEY != '':
            options.add_argument("--load-extension=C:\\Users\\brady\\Downloads\\Roblox Account Generator\\extra\\solver")
        if capmonster_key != '':
            options.add_extension("./extra/pabjfbciaedomjjfelfafejkppknjleh.crx")
        options.add_argument("--disable-gpu")
        # options.add_argument(f"--bypass={byp_key}")
        ser = Service("./extra/chromedriver.exe")
        driver = webdriver.Chrome(options=options)
        # minimize the window
        driver.minimize_window()
        # Add the nopecha key to the options
        if NOPECHA_KEY != '':
            driver.get(f"https://nopecha.com/setup#{NOPECHA_KEY}")
            time.sleep(1)
            driver.get("chrome-extension://dknlfmjaanfblgfdfebhijalfmhmjjjo/popup.html")
            time.sleep(1)
        if capmonster_key != '':
            driver.get("chrome-extension://pabjfbciaedomjjfelfafejkppknjleh/popup.html")
            time.sleep(1)
            driver.find_element(By.XPATH, "/html/body/div/div/div[2]/div[1]/div[1]/div[1]/div[2]/div/input").send_keys(capmonster_key)
            time.sleep(1)
            driver.find_element(By.XPATH, "/html/body/div/div/div[2]/div[1]/div[1]/div[2]/button").click()
            time.sleep(2)
        driver.get("https://www.roblox.com")
        time.sleep(1)
        try:
            if driver.find(By.XPATH, "//button[contains(text(),'Accept All')]").is_displayed == True:
                driver.find_element(By.XPATH, "//button[contains(text(),'Accept All')]").click()
            else:
                pass
        except:
            pass
        print(Center.XCenter(f"{info} {Fore.LIGHTGREEN_EX}Generating An Account With The Username: {Fore.LIGHTRED_EX}" + username1))
        if webhook != '' or webhook != False:
            # send the error to the webhook
            webhook_url = webhook
            data = {
                "content": f"**Roblox Account Generator By 3rr0r**\n\n**Info:**\n``` Generating An Account With The Username: {username1}```"
            }
            headers = {
                "Content-Type": "application/json"
            }
            requests.post(webhook_url, json=data, headers=headers)
        month = driver.find_element(By.XPATH, "//select[@id='MonthDropdown']")  
        month.click()
        month.send_keys("January")
        day = driver.find_element(By.XPATH, "//select[@id='DayDropdown']")
        day.click()
        day.send_keys("1")
        year = driver.find_element(By.XPATH, "//select[@id='YearDropdown']")
        year.click()
        year.send_keys("2000")
        year.send_keys(Keys.RETURN)
        username = driver.find_element(By.XPATH, "//input[@id='signup-username']")
        username.click()
        username.send_keys(username1)
        password = driver.find_element(By.XPATH, "//input[@id='signup-password']")
        password.click()
        passwrd = randomString(10)
        password.send_keys(passwrd)
        with open("./extra/acc.txt", "w") as f:
            f.write(str(int(accnumber) + 1))
        
        with open("./extra/acc.txt", "r") as f:
            accnumber = f.read()
        time.sleep(0.5)
        driver.find_element(By.XPATH, "//button[@id='MaleButton']").click()
        print(Center.XCenter(f"{info} {Fore.LIGHTCYAN_EX}Random Gender: {Fore.LIGHTRED_EX}Male{Fore.LIGHTCYAN_EX} Account{Fore.RESET}"))

        time.sleep(0.5)

        start_time = time.time()

        if time.time() - start_time > 30:
            driver.quit()
            main()
            break

        # if its been more than 30 seconds, close the browser and restart
        # if time.time() - start_time > 30:
        #     driver.quit()
        #     main()
        #     break
    


        try:
            driver.find_element(By.XPATH, "//button[@id='signup-button']").click()
            time.sleep(3)
        except:
            print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Error: {Fore.LIGHTCYAN_EX}Signup Error!{Fore.RESET}"))
            print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Error: {Fore.LIGHTCYAN_EX}Skipping Account...{Fore.RESET}"))
            if webhook != '' or webhook != False:
                # send the error to the webhook
                webhook_url = webhook
                data = {
                    "content": f"**Roblox Account Generator By 3rr0r**\n\n**Error:**\n```{error} Signup Error!```\n**Skipping Account...**"
                }
                headers = {
                    "Content-Type": "application/json"
                }
                requests.post(webhook_url, json=data, headers=headers)
            driver.quit()
            continue
        time.sleep(3)
        try:
            if driver.find(By.XPATH, "//p[@id='signup-usernameInputValidation']").text == "This username is already in use.":
                print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Error: {Fore.LIGHTCYAN_EX}Username Is Taken!{Fore.RESET}"))
                print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Error: {Fore.LIGHTCYAN_EX}Skipping Account...{Fore.RESET}"))
                if webhook != '' or webhook != False:
                    # send the error to the webhook
                    webhook_url = webhook
                    data = {
                        "content": f"**Roblox Account Generator By 3rr0r**\n\n**Error:**\n```{error} Username Is Taken!```\n**Skipping Account...**"
                    }
                    headers = {
                        "Content-Type": "application/json"
                    }
                    requests.post(webhook_url, json=data, headers=headers)
                driver.quit()
                continue
            else:
                pass
        except:
            pass
        try:
            if driver.find_element(By.XPATH, "//div[@id='GeneralErrorText']").text == "Sorry! An unknown error occurred. Please try again later.":
                print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Error: {Fore.LIGHTCYAN_EX}Rate Limit!{Fore.RESET}"))
                print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Time To Take A Nap For About 45 Minutes...{Fore.RESET}"))
                if webhook != '' or webhook != False:
                    # send the error to the webhook
                    webhook_url = webhook
                    data = {
                        "content": f"**Roblox Account Generator By 3rr0r**\n\n**Error:**\n```{error} Rate Limit!```\n**Time To Take A Nap For About 45 Minutes...**"
                    }
                    headers = {
                        "Content-Type": "application/json"
                    }
                    requests.post(webhook_url, json=data, headers=headers)
                driver.quit()
                t = 2800
                while t:
                    mins, secs = divmod(t, 60)
                    timer = f'{info} {Fore.LIGHTCYAN_EX}Time Remaining: {Fore.LIGHTYELLOW_EX}' + '{mins:02d}:{secs:02d}'.format(mins=mins, secs=secs)
                    print(Center.XCenter(timer), end="\r")
                    

                    time.sleep(1)
                    t -= 1
                continue
            else:
                pass
        except:
            pass
                
        while driver.current_url != "https://www.roblox.com/home?nu=true":
            time.sleep(1)
        print(Center.XCenter(f"{success} {Fore.LIGHTCYAN_EX}Account Generated Successfully --> {Fore.LIGHTBLUE_EX}Username: {Fore.LIGHTRED_EX}{username1}"))
        if webhook != '' or webhook != False:
            # send the error to the webhook
            webhook_url = webhook
            data = {
                "content": f"**Roblox Account Generator By 3rr0r**\n\n**Success:**\n```Account Generated Successfully --> Username: {username1}\n\nCookies: {driver.get_cookie('.ROBLOSECURITY')['value']}```"
            }
            headers = {
                "Content-Type": "application/json"
            }
            requests.post(webhook_url, json=data, headers=headers)
        counter += 1
        ctypes.windll.kernel32.SetConsoleTitleW(f"Roblox Account Generator By 3rr0r | {counter}/{countz} Accounts Generated")

        file = open("accounts.txt", "a")
        file.write(f"{username1}:{passwrd}\n")
        file.close()
        with open("cookies.txt", "a") as f:
            f.write(driver.get_cookie(".ROBLOSECURITY")["value"])
            # json.dump(driver.get_cookie(".ROBLOSECURITY"), f)
            f.write("\n")
        time.sleep(3)
        driver.quit()

def starter():
    ctypes.windll.kernel32.SetConsoleTitleW(f"Roblox Account Generator By 3rr0r")
    global countz, jujuname, jondor, rndd#, byp_key
    print("\n")
    try:
        countz = int(input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}How Many Accounts Do You Want To Create: {Fore.LIGHTRED_EX}")))
    except:
        print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Please Enter A Valid Number!"))
        input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}Press Enter to continue..."))
        time.sleep(1)
        clear()
        starter()
    time.sleep(0.5)
    rnd_usernam = input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}Do You Want To Use Random Username? (Y/N): {Fore.LIGHTRED_EX}"))
    time.sleep(0.5)
    if rnd_usernam == "y" or rnd_usernam == "Y":
        rndd = "true"
        rnd_list = input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}Do You Want To Use A Username From The List (extra/usernames.txt)? (Y/N): {Fore.LIGHTRED_EX}"))
        time.sleep(0.5)
        if rnd_list == "y" or rnd_list == "Y":
            rndd = "txt"
            jujuname = "Random"
            time.sleep(0.5)
    elif rnd_usernam == "n" or rnd_usernam == "N":
        rndd = "false"
        jujuname = input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}Enter Username: {Fore.LIGHTRED_EX}"))
        time.sleep(0.5)
    else:
        print(Center.XCenter(f"{error} {Fore.LIGHTRED_EX}Please Enter A Valid Option!"))
        input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}Press Enter to continue..."))
        time.sleep(1)
        clear()
        starter()
    # byp_key = input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}Enter Private Key (enter N if none)\n(Entering Random Letters Will Result In The Bypasser To Not Work Properly): {Fore.LIGHTRED_EX}"))
    time.sleep(0.5)

    print(Center.XCenter(f"{info} {Fore.LIGHTCYAN_EX}Starting... {Fore.RESET}"))
    if webhook != '' or webhook != False:
        # send the error to the webhook
        webhook_url = webhook
        data = {
            "content": f"**Roblox Account Generator By 3rr0r**\n\n**Info:**\n``` Starting...```"
        }
        headers = {
            "Content-Type": "application/json"
        }
        requests.post(webhook_url, json=data, headers=headers)
    jondor = "Random"
    main()
    input(Center.XCenter(f"{Fore.LIGHTCYAN_EX}Press Enter To Exit..."))
    if webhook != '' or webhook != False:
        # send the error to the webhook
        webhook_url = webhook
        data = {
            "content": f"**Roblox Account Generator By Its3rr0rsWRLD**\n\n**Info:**\n``` Exiting...```"
        }
        headers = {
            "Content-Type": "application/json"
        }
        requests.post(webhook_url, json=data, headers=headers)
    exit()


if __name__ == "__main__":
    clear()
    global counter
    counter = 0
    # Get account number from acc.txt
    with open("./extra/acc.txt", "r") as f:
        accnumber = f.read()
    starter()