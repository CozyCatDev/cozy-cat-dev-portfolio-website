"use client";
import { useState, useEffect, useRef } from "react";
import { useNavModal } from "./NavModalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import s from "@componentStyles/Modal.module.scss";
import { NavModalContextType } from "@customTypes/declarations";
import StatusMessage from "./StatusMessage";
import emailjs from "@emailjs/browser";

export default function Modal(){
    const { modalOpen, closeModal } = useNavModal() as NavModalContextType;
    const modalRef = useRef<any>(null);
    const formRef = useRef<any>(null);

    const [errors, setErrors] = useState<{
        name: string,
        email: string,
        requestMessage: string,
        form: string
    }>({
        name: "",
        email: "",
        requestMessage: "",
        form: ""
    });
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [requestMessage, setRequestMessage] = useState<string>("");
    const [formValid, setFormValid] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [touchedFields, setTouchedFields] = useState({
        "name": false,
        "email": false,
        "request-message": false
    });
    const [submitPressed, setSubmitPressed] = useState<boolean>(false);

    useEffect(() => {
        if (modalOpen){
            modalRef.current?.showModal();
        }
        else{
            modalRef.current?.close();
        }
    },[modalOpen]);

    useEffect(() => {
        validateForm();
    },[name, email, requestMessage])

    useEffect(() => {
        if (submitPressed){
            if(formValid){
                emailjs.sendForm(process.env.SERVICE_ID as string, process.env.TEMPLATE_ID as string, formRef.current, {
                    publicKey: process.env.PUBLIC_KEY
                });
                setErrors(prevErrors => ({
                    ...prevErrors,
                    form: ""
                }));
                setFormSubmitted(true);
            }
            else{
                setErrors(prevErrors => ({
                    ...prevErrors,
                    form: "Could not submit form. Please check your details and try again."
                }));
                setFormSubmitted(false);
            }
        }
    }, [formValid])

    const handleTouchedFields = (e: any) => {
        setTouchedFields({...touchedFields, [e.currentTarget.name]: true});
    }

    const validateForm = () => {
        const errors: {
            name: string,
            email: string,
            requestMessage: string,
            form: string
        } = {
            name: "",
            email: "",
            requestMessage: "",
            form: ""
        };
        if (!name){
            errors.name = "Please enter your name.";
        }
        if (!email){
            errors.email = "Please enter your email.";
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            errors.email = "Please enter a valid email."
        }
        if (!requestMessage){
            errors.requestMessage = "Please enter your request.";
        }
        setErrors(errors);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setFormValid(errors.name === "" && errors.email === "" && errors.requestMessage === "");
    }

    return (
        <dialog className={s["modal"]} ref={modalRef} aria-labelledby="modal-heading" aria-describedby="modal-description">
            <h1 id="modal-heading" className={s["heading"]}>Email Form <FontAwesomeIcon icon={ faEnvelope }/></h1>
            <p id="modal-description" className={s["disclaimer"]}>Since I&apos;m still new and learning web design, I will only accept requests for creating static websites from design files, asset design (logos/illustrations) and simple tasks like fixing Javascript issues. I <span>will not</span> tolerate any nefarious requests. Thank you for understanding! Prices will vary with project size.</p>
            <button className={s["close-btn"]} onClick={closeModal}><FontAwesomeIcon icon={ faXmark } type="button" aria-label="close email form button"/></button>
            <form method="dialog" className={s["form"]} ref={formRef} onSubmit={handleSubmit} aria-label="email form">
                <div className={s["form-group"]} aria-labelledby="">
                    <label htmlFor="name" className={s["name"]}>Name</label>
                    <input id="name" className={s["name-input"]} type="text" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} onFocus={handleTouchedFields} placeholder="e.g. John Doe" required aria-required="true" />
                    {(touchedFields["name"] && errors.name) && <StatusMessage message={errors.name} status="failure"/>}
                </div>
                <div className={s["form-group"]}>
                    <label htmlFor="email" className={s["email"]}>Email</label>
                    <input id="email" className={s["email-input"]} type="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} onFocus={handleTouchedFields} placeholder="e.g. johndoe@example.com" required aria-required="true" />
                    {(touchedFields["email"] && errors.email) && <StatusMessage message={errors.email} status="failure"/>}
                </div>
                <div className={s["form-group"]}>
                    <label htmlFor="request-type" className={s["request-type"]}>Request Type</label>
                    <select id="request-type" className={s["request-type-input"]} name="request-type" required aria-required="true">
                        <option value="static website">Static website</option>
                        <option value="asset design">Asset design</option>
                        <option value="website issue">Website issue</option>
                        <option value="others">Others (please specify below)</option>
                    </select>
                </div>
                <div className={s["form-group"]}>
                    <label htmlFor="request-message" className={s["request-message"]}>Request</label>
                    <textarea id="request-message" className={s["request-message-input"]} name="request-message" value={requestMessage} onChange={(e) => setRequestMessage(e.currentTarget.value)} onFocus={handleTouchedFields} placeholder="e.g. I need you to convert a Figma design into a static website." rows={15} required aria-required="true"></textarea>
                    {(touchedFields["request-message"] && errors.requestMessage) && <StatusMessage message={errors.requestMessage} status="failure"/>}
                </div>
                <input id="submit" className={`${s["submit-input"]} btn btn--primary`} type="submit" name="submit" onClick={() => setSubmitPressed(true)}/>
                { 
                        formSubmitted && submitPressed?
                        <StatusMessage message="Your email has been sent! I will reply within 1-3 working days. Thank you!" status="success"/>:
                            errors.form ?
                                <StatusMessage message={errors.form} status="failure"/>:
                                ""
                }
            </form>
        </dialog>
    )
}