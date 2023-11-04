from flask import Flask,render_template,request,session,redirect,url_for,jsonify, flash
from flask_mail import Mail,Message
import re
import os
from werkzeug.utils import secure_filename
import json
import random




app=Flask(__name__,static_url_path='/static')


UPLOAD_FOLDER = 'static/uploads/' 
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}



app.config['SECRET_KEY']='tsfyguaistyatuis589566875623568956'
app.config['MAIL_SERVER']="smtp.googlemail.com"
app.config['MAIL_PORT']=587
app.config['MAIL_USE_TLS']=True
app.config['MAIL_USERNAME']='senatedetails@gmail.com'
app.config['MAIL_PASSWORD']='egboimqyrcewictq'
app.config['MAIL_USE_SSL'] = False
mail=Mail(app)


# Check if there's a saved projects file, if not, initialize projects as an empty list
if os.path.exists('projects.json'):
    with open('projects.json', 'r') as file:
        projects = json.load(file)
else:
    projects = []

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


print("````````````````````````", os.getcwd())

@app.route('/Home',methods=["POST","GET"])
@app.route('/')
# @app.route('/',methods=["POST","GET"])
def Home():
    return render_template('renderfile.html')

@app.route('/admin')
def Admin():
    return render_template('index.html')

@app.route('/upload_project', methods=['POST','GET'])
def upload_project():
    title = request.form['title']
    subtitle = request.form['subtitle']

    # Check if project already exists
    for project in projects:
        if project['title'] == title and project['subtitle'] == subtitle:
            flash('Project already exists')
            return redirect(request.url)

    images = []

    # Handle multiple file uploads
    files = request.files.getlist('files')
    for file in files:
        if file.filename != '' and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            images.append(filename)
        else:
            flash('Invalid file type')

    # Add project to list
    projects.append({'title': title, 'subtitle': subtitle, 'images': images})

    flash('Project successfully added')

    # Save projects to file after each upload
    with open('projects.json', 'w') as file:
        json.dump(projects, file)

    return redirect("/projects")


@app.route('/delete_project/<title>/<subtitle>', methods=['GET'])
def delete_project(title, subtitle):
    global projects
    projects = [project for project in projects if not (project['title'] == title and project['subtitle'] == subtitle)]
    return redirect('/adminpage')

@app.route('/edit_project/<title>/<subtitle>', methods=['GET'])
def edit_project(title, subtitle):
    project = next((project for project in projects if project['title'] == title and project['subtitle'] == subtitle), None)
    if project:
        return render_template('edit_project.html', project=project)
    else:
        return 'Project not found'

@app.route('/update_project/<title>/<subtitle>', methods=['POST'])
def update_project(title, subtitle):
    global projects
    project = next((project for project in projects if project['title'] == title and project['subtitle'] == subtitle), None)
    if project:
        project['title'] = request.form['title']
        project['subtitle'] = request.form['subtitle']

        # Handle updating images if needed
        if 'files' in request.files:
            images = []
            files = request.files.getlist('files')
            for file in files:
                if file.filename != '' and allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                    images.append(filename)
                else:
                    flash('Invalid file type')
            project['images'] = images

        # Save projects to file after each update
        with open('projects.json', 'w') as file:
            json.dump(projects, file)

        return redirect("/adminpage")
    else:
        return 'Project not found'


@app.route('/projects')
def view_projects():
    return render_template('ClientPage.html', projects=projects)

@app.route('/logout')
def logOut():

    return render_template('AboutPage.html')



@app.route('/about')
def About():
    return render_template('AboutPage.html')

@app.route('/contact',methods=["POST","GET"])
def Contact():
    return render_template('ContactPage.html')


# Email validation function
def is_valid_email(email):
    pattern = r'^[\w\.-]+@gmail\.com$'
    return re.match(pattern, email)

@app.route('/subscribe', methods=["POST"])
def subscribe():    
    email = request.form.get('email')

    if not is_valid_email(email):
        return jsonify({'success': False, 'message': 'Invalid email format.'})

    msg_title = "New Addons on Newsletter"
    sender = 'noreply@app.com'
    msg = Message(msg_title, sender=sender, recipients=['senatedetails@gmail.com'])
    msg_body = f"New Subscriber Called {email} joined in our Newsletter"
    msg.body = ''
    data = {
        'msghead': 'One Newly Subscribed',
        'msgtitle': msg_title,
        'msgbody': msg_body,
    }

    msg.html = render_template('renderemail.html', data=data)

    try:
        # Simulate a failure by raising an exception

        mail.send(msg)
        return jsonify({'success': True, 'message': 'Email sent successfully!'})
    except Exception as e:
        print(e)
        return jsonify({'success': False, 'message': 'Failed to send email.'})



@app.route('/postcontact',methods=["POST","GET"])
def PostContact():
    name = request.form.get('name')
    email0=request.form.get('email0')
    phone= request.form.get('phone')
    location=request.form.get('location')
    constructionType = request.form.get('constructionType')
    Details=request.form.get('consdetails')

    msg_title="Client Call-up"
    sender='noreply@app.com'
    msg=Message(msg_title,sender=sender,recipients=['senatedetails@gmail.com'])
    msg.body=''
    data={
        'formname':name,
        'formmail':email0,
        'formphone':phone,
        'formlocation':location,
        'formconsType':constructionType,
        'formconsDetails':Details,

    }

    msg.html=render_template('Contactform.html',data=data)


    try:
        mail.send(msg)
        return render_template('ContactPage.html')
    except Exception as e:
        print(e)
        return f"The email was not sent: {e}"


@app.route("/login")
def Login():
    return render_template("LoginPage.html")



@app.route("/project")
def Project():
    return render_template('Projects.html')


@app.route("/clientelle")
def Client():
    return render_template('ClientPage.html',projects=projects)


# Generate random 4-digit OTP
def generate_otp():
    return str(random.randint(1000, 9999))

# Dictionary to store OTPs (you can use a database in real-world scenario)
otp_dict = {}

@app.route('/signuppage')
def signuppage():
    return render_template('LoginPage.html')

@app.route('/signup', methods=['POST'])
def signup():
    email = request.form.get('email')
    password = request.form.get('password')

    if email == 'maniarunvenkatesh@gmail.com' and password == 'pmarunms7':
        otp = generate_otp()
        otp_dict[email] = otp

        # Send OTP to user's email
        msg = Message('Your OTP for Signup', sender='senateengineering@gmail.com', recipients=[email])
        msg.body = f'Your OTP is: {otp}'
        mail.send(msg)

        return render_template('verify_otp.html', email=email)
    else:
        return render_template('403.html')

@app.route('/verify_otp', methods=['POST'])
def verify_otp():
    email = request.form.get('email')
    user_otp = request.form.get('otp')

    if otp_dict.get(email) == user_otp:
        return redirect(url_for('adminpage'))
    else:
        return render_template('verify_otp.html', email=email, message='Invalid OTP. Please try again.')

@app.route('/adminpage')
def adminpage():
    if 'email' in session:
        email = session['email']
        return render_template('index.html',email=email,projects=projects)
    else:
         return render_template('index.html',projects=projects)


@app.route('/signout')
def signout():
    session.pop('email', None)
    return redirect(url_for('signuppage'))

@app.route('/temp')
def temp():
    return render_template('navbar.html')


if __name__ == "__main__":
    app.run(debug=True)


