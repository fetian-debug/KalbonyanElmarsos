## Programming Foundation Fundamentals 

## Challenges Requirements And Solution
--------------------------------------

### Challenge 1 : Guessing Game Requirements

1. Ask the user: "What's my favorite food?" 
2. If the user enters the name of your favorite food, output: "Yep! So amazing!" 
3. If the user doesn't enter the name of your favorite food, output: "Yuck! That's not it!"
4. Regardless of what the user enters, output: "Thanks for playing!"


### Challenge 1 : Solution

- [Guessing Game Challenge](https://raw.githubusercontent.com/fetian-debug/KalbonyanElmarsos/main/Linkedin-Learning/Programming-Foundation-Fundamentals/Challengs/Guessing-Game-Challenge.py)
```python
# Ask the user: "What's my favorite food?"
guess = input("What's my favorite food? ")
# If guess right print Yep! So amazing!
if guess == "chicken":
    print("Yep! So amazing!")
# If guess other than chicken
else:
    print("Yuck! That’s not it!")
# Regardless of what the user enters print Thanks for playing!
print("Thanks for playing!")

```

### Challenge 2 : Favorite Cities Requirements

1. Has a function named favorite_city
2. favorite_city should have one parameter name
3. You should call favorite_city at least three times
4. The output should include: "One of my favorite cities is" 



### Challenge 2 : Solution

- [Favorite Cities Challenge](https://raw.githubusercontent.com/fetian-debug/KalbonyanElmarsos/main/Linkedin-Learning/Programming-Foundation-Fundamentals/Challengs/Favorite-Cities-Challenge.py)

```python
# Prints out the name of a favorite city
def favorite_city(name):
    print("One of my favorite cities is", name)
    
# Call function favorite_city with parameter name at least three time
favorite_city("KafrElsheikh, Egypt")
favorite_city("Mecca, Saudi")
favorite_city("khartoum, Sudan")

```
