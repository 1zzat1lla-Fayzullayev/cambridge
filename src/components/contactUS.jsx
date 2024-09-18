/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import InputMask from "react-input-mask";
import Wrapper from "../layout/wrapper";

const ContactUS = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+998 (__) ___-__-__");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
    const USERID = "YOUR_TELEGRAM_CHAT_ID";

    const encodeText = (text) => encodeURIComponent(text);

    const sendFeedback = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const text = `Name: ${name}\nMessage: ${description}\nPhone number: ${phone}\nEmail: ${email.length === 0 ? "Email is empty" : email
            }\n Services: ${service}`;

        try {
            await axios.post(
                `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${encodeText(
                    text
                )}`
            );
            toast.success("Message sent successfully!");
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsLoading(false);
            setName("");
            setPhone("+998 (__) ___-__-__");
            setEmail("");
            setDescription("");
            setService("");
        }
    };

    const handlePhoneChange = (e) => {
        const cleaned = e.target.value.replace(/[^+\d]/g, '');
        setPhone(cleaned);
    };

    return (
        <Wrapper>

            <>
                <div className="flex flex-col md:flex-row items-center justify-center mt-[50px]">
                    <div className="w-full">
                        <form onSubmit={sendFeedback} className="bg-white p-8 rounded-lg">
                            <div className="flex flex-col justify-center items-center">

                                <h3 className="md:text-[50px] font-bold text-gray-800 mb-2">Tavsiye Alın</h3>
                                <p className="text-gray-600 mb-6">Bizimle iletişime geçmek için lütfen aşağıdaki formu doldurun.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="inputWrap">
                                    <InputMask
                                        placeholder="Adınız"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        className="form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        name="name"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="inputWrap">
                                    <InputMask
                                        placeholder="Telefonunuz"
                                        onChange={handlePhoneChange}
                                        value={phone}
                                        className="form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        name="phone"
                                        required
                                        mask="+999 (99) 999-99-99"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="inputWrap mb-4">
                                <InputMask
                                    placeholder="E-postanız"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    name="email"
                                    required
                                    type="email"
                                />
                            </div>
                            <div className="inputWrap mb-4">
                                <select
                                    onChange={(e) => setService(e.target.value)}
                                    value={service}
                                    className="form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    name="service"
                                    required
                                >
                                    <option value="" disabled>Bir Seviye Seçin</option>
                                    <option value="a1">A1</option>
                                    <option value="a2">A2</option>
                                    <option value="a1">B1</option>
                                    <option value="a2">B2</option>
                                    <option value="a1">C1</option>
                                    <option value="a2">C2</option>
                                </select>
                            </div>
                            <div className="inputWrap mb-4">
                                <textarea
                                    placeholder="Your Message"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    className="form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    name="message"
                                    required
                                />
                            </div>
                            <p className="text-gray-600 mb-4">
                                Daha fazla bilgiye mi ihtiyacınız var? <a href="#" className="text-blue-500 hover:underline">buraya tıklayın</a>
                            </p>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-3 rounded-md text-white transition duration-200 
              ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                            >
                                {isLoading ? (
                                    <span className="spinner-border-sm spinner-border"></span>
                                ) : (
                                    <span>Mesaj Gönder</span>
                                )}
                            </button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </>
        </Wrapper>

    );
};

export default ContactUS;
