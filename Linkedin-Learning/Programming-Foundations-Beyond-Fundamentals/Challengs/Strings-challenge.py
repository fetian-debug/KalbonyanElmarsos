# Create variable miles and set distance from user
miles = input('Enter a distance in miles: ')
# Convert miles from intger to float using float function
miles_float = float(miles)
# convert from miles to kilometers_value = miles_value * 1.609344
kilometers = miles_float * 1.609344
# Print the result to the terminal with text description
print('That value in kilometers is',kilometers)
