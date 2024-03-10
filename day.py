import os

# Define the base folder name
base_folder = "day"

# Specify the range of days
start_day = 2
end_day = 100

# Loop through each day to create folders and files
for day in range(start_day, end_day + 1):
    # Create folder name
    folder_name = f"{base_folder}{day}"

    # Create folder if it doesn't exist
    os.makedirs(folder_name, exist_ok=True)

    # Create index.html file with dynamic title
    with open(os.path.join(folder_name, "index.html"), "w") as html_file:
        html_file.write(f'<!DOCTYPE html>\n<html lang="en">\n<head>\n')
        html_file.write('  <meta charset="UTF-8">\n')
        html_file.write('  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n')
        html_file.write('  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n')
        html_file.write(f'  <link rel="stylesheet" href="style.css">\n')
        html_file.write(f'  <title>Day{day}</title>\n')
        html_file.write('</head>\n<body>\n\n</body>\n</html>')

    # Create style.css file
    with open(os.path.join(folder_name, "style.css"), "w") as css_file:
        # Add your CSS styles here if needed
        pass

print("Folders and files created successfully.")
