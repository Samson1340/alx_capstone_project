from flask import Flask, render_template, request, redirect, url_for
import smtplib
from email.message import EmailMessage

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        if name and email and message:
            # Send an email notification
            msg = EmailMessage()
            msg.set_content(f'Name: {name}\nEmail: {email}\nMessage: {message}')
            msg['Subject'] = 'Portfolio Contact Form Submission'
            msg['From'] = 'samsonsimeon2023@gmail.com'
            msg['To'] = 'samsonsimeon2023@gmail.com'

            # Configure SMTP server and credentials
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login('samsonsimeon2023@gmail.com', 'nlzl wxyz xwby syfq')

            server.send_message(msg)
            server.quit()
            return render_template('success.html')
        else:
            return 'All fields are required.'
if __name__ == '__main__':
    app.run(debug=True)