import os
from PIL import Image
import shutil

# Specify the paths to the existing dataset and the new data
existing_dataset_path = "path_to_existing_dataset"
new_data_path = "path_to_new_data"

# Create a list of labels or categories for the new data
new_data_labels = ["label1", "label2", "label3"]

# Loop through the new data and organize it into the existing dataset structure
for label in new_data_labels:
    label_folder = os.path.join(existing_dataset_path, label)
    
    # Ensure the label folder exists or create a new one
    if not os.path.exists(label_folder):
        os.makedirs(label_folder)
    
    # Loop through images in the new data folder
    for filename in os.listdir(os.path.join(new_data_path, label)):
        if filename.endswith(".jpg"):  # Adjust the file extension as needed
            image_path = os.path.join(new_data_path, label, filename)
            new_image_path = os.path.join(label_folder, filename)
            
            # Copy or move the image to the label folder
            shutil.copy(image_path, new_image_path)
            
            # You can also perform data augmentation or preprocessing here if necessary

# Your dataset is now expanded with new data
