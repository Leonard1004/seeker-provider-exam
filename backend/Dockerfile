FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the backend code to the container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["python", "app.py"]