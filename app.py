from flask import Flask,render_template,request,session,redirect,url_for,jsonify
from flask_mail import Mail,Message
import re
app=Flask(__name__)
app.config['SECRET_KEY']='tsfyguaistyatuis589566875623568956'
app.config['MAIL_SERVER']="smtp.googlemail.com"
app.config['MAIL_PORT']=587
app.config['MAIL_USE_TLS']=True
app.config['MAIL_USERNAME']='senatedetails@gmail.com'
app.config['MAIL_PASSWORD']='egboimqyrcewictq'
mail=Mail(app)

    

@app.route('/Home',methods=["POST","GET"])
@app.route('/',methods=["POST","GET"])
def Home():
    return render_template('renderfile.html')


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


@app.route("/project")
def Project():
    return render_template('Projects.html')

@app.route("/clientelle")
def Client():
    return render_template('ClientPage.html')

if __name__ == "__main__":
    app.run(debug=True)


