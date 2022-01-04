## Programming Foundations: Beyond the Fundamentals

## Challenges Requirements And Solution
--------------------------------------

### Challenge 1 : Working with collections challenge requirement

1. You have two groups variables first group is stars name of Nearest stars of Earth, second group is highest peak on each tectonic plate.
2. For First Group:
	- Replace variables with list "stars"
	- Create statement that prints fourth nearest star.
3. For Second Group:
	- Create dictionary "peaks" that stores all values.
	- Create statement that prints name of hightest peak on Pacific plate.
4. Output like: Wolf359
				Mauna Kea
 


### Challenge 1 : Solution

- [Working-with-collections-challenge.py](https://raw.githubusercontent.com/fetian-debug/KalbonyanElmarsos/main/Linkedin-Learning/Programming-Foundations-Beyond-Fundamentals/Challengs/Working-with-collections-challenge.py)
```python
# First Group
# Nearest stars to Earth
# star1 = 'Sol'
# star2 = 'Alpha Centauri'
# star3 = 'Barnard'
# star4 = 'Wolf 359'

# Create list variable and set first group
stars = [
    'Sol',
    'Alpha Centauri',
    'Barnard',
    'Wolf 359',
]

# Prints fourth nearest star 
print(stars[3])

# Second Group
# Highest peak on each tectonic plate
# African = 'Kilimanjaro'
# Antarctic = 'Vinson'
# Australian = 'Puncak Jaya'
# Eurasian = 'Everest'
# North_American = 'Denali'
# Pacific = 'Mauna Kea'
# South_American = 'Aconcagua'

# Create dic variable and set second group
peaks = {
    'African': 'Kilimanjaro',
    'Antarctic': 'Vinson',
    'Australian': 'Puncak Jaya',
    'Eurasian': 'Everest',
    'North_American': 'Denali',
    'Pacific': 'Mauna Kea',
    'South_American': 'Aconcagua',
}

# Prints name of hightest peak on Pacific plate
print(peaks['Pacific'])

```
-----------------------------------------------------

### Challenge 2 : For loop challenge requirement

1. You have a list of fruits name.
2. Print the name of all the fruits in the Terminal.
3. Print each name on a separate line.
4. Output like: Our fruit selection:
				apples
				bananas
				dragon fruit
				mangos
				nectarines
				pears

### Challenge 2 : Solution

- [For-loop-challenge.py](https://raw.githubusercontent.com/fetian-debug/KalbonyanElmarsos/main/Linkedin-Learning/Programming-Foundations-Beyond-Fundamentals/Challengs/For-loop-challenge.py)

```python
# Create list variable fruits and set all fruits
fruits = [
    'apples',
    'bananas',
    'dragon fruit',
    'mangos',
    'nectarines',
    'pears',
]

# Print "Our fruit selection:"
print('Our fruit selection:')


for fruit in fruits:
    print(fruit)
    
```
-----------------------------------------------------

### Challenge 3 : Strings challenge requirement

1. Take the value entered by a user
2. Convert it to a value in kilometers
3. Print the result to the terminal with text description

### Challenge 3 : Solution

- [Strings-challenge.py](https://raw.githubusercontent.com/fetian-debug/KalbonyanElmarsos/main/Linkedin-Learning/Programming-Foundations-Beyond-Fundamentals/Challengs/Strings-challenge.py)

```python
# Create variable miles and set distance from user
miles = input('Enter a distance in miles: ')
# Convert miles from intger to float using float function
miles_float = float(miles)
# convert from miles to kilometers_value = miles_value * 1.609344
kilometers = miles_float * 1.609344
# Print the result to the terminal with text description
print('That value in kilometers is',kilometers)

```
-----------------------------------------------------

### Challenge 2 : Debugging challenge requirement

 
1. You have plant if care low for aloe, if care medium for pothos, if care  high for orchid.
2. Debuging finding and fixing error in code.
3. Error msg: SyntaxError: invalid syntax.
4. Debug next code:
```python
def plant_recommendation(care):
    if care = 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    elif care == 'medium':
        print('orchid')

plant_rec('low')
plant_recommendation('medium')
plant_recommendation('high')

```


### Challenge 2 : Solution

- [Debugging-challenge.py](https://raw.githubusercontent.com/fetian-debug/KalbonyanElmarsos/main/Linkedin-Learning/Programming-Foundations-Beyond-Fundamentals/Challengs/Debugging-challenge.py)

- When debuging code I find:
	- syntax error '==' instead of '=' in line 2
	- runtime error 'plant_recommendation' instead of 'plant_rec' in line 9
	- logical error 'high' instead of 'medium' in line 6

- Nice Debug with [Rubber Duck.](https://en.wikipedia.org/wiki/Rubber_duck_debugging)	
```python
# define function for plant if care low for aloe, if care medium for pothos, if care  high for orchid.
def plant_recommendation(care):

# I find syntax error '='
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
        
# I find logical error 'medium'
    elif care == 'high':
        print('orchid')
        
# I find runtime error 'plant_rec'
plant_recommendation('low')
plant_recommendation('medium')
plant_recommendation('high')

```
