import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlusG, faPinterestP, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../App.css';
import { firebase_app} from '../config/firebase'; // Import the Firebase database instance

const Footer = () => {
    return (
        <footer id="contact" className="container-fluid">
            <div className="container">
                <div className="row content-around ">
                    <div className="col-lg-8 col-md-12">
                        <QuickMessageForm />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <FooterCopy />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const QuickMessageForm = () => {
    const [fullName, setFullName] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSaveData = () => {
        // Save data to Firebase
       firebase_app.database().ref('users').push({
            fullName: fullName,
            bloodGroup: bloodGroup,
            email: email,
            password: password
        });
        // Clear the form after saving
        setFullName('');
        setBloodGroup('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="footer-form">
            <div className="form-card">
                <div className="form-title">
                    <h4>Quick Message</h4>
                </div>
                <div className="form-body">
                    <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Enter Full Name" className="form-control" />
                    <input value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} type="text" placeholder="Enter Blood Group" className="form-control" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter E-mail" className="form-control" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" className="form-control" />
                    <button className="btn btn-sm btn-primary w-100" onClick={handleSaveData}>Send Request</button>
                </div>
            </div>
        </div>
    );
};

const FooterCopy = () => {
    return (
        <div className="footer-copy">
            <div className="socila-link cursor-pointer">
                <ul>
                    <li><a><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                    <li><a><FontAwesomeIcon icon={faPinterestP} /></a></li>
                    <li><a><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a><FontAwesomeIcon icon={faFacebookF} /></a></li>
                </ul>
            </div>
            <p className="text-center">Copyright © <a href="https://www.smarteyeapps.com">Smarteyeapps.com</a> | All right reserved.</p>
        </div>
    );
};

export default Footer;
