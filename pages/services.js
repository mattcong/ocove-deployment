import HeaderArrow from "../components/headerarrow";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import ContactForm from "../components/contactform";

const Services = () => {

    return (
        <>
            <Navbar />
            <div className="services--container">
                <div className="services--header-container">
                    <motion.h2 className="services--header-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >What we do</motion.h2>
                    <HeaderArrow />
                </div>
                <motion.div className="services--content-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                    <div className="services--content">
                        <div className="services--asset-container">
                            <div className="services--asset">
                            </div>
                            <h3 className="services--asset-title">Web Development</h3>
                        </div>
                        <p className="services--content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu auctor nisi. Suspendisse potenti. Nulla consequat magna in nisl euismod, sed mollis velit bibendum. Aliquam in nulla lorem. </p>
                    </div>
                    <div className="services--content">
                        <div className="services--asset-container services--asset-container-2">
                            <div className="services--asset"></div>
                            <h3 className="services--asset-title">3D Design</h3>
                        </div>
                        <p className="services--content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu auctor nisi. Suspendisse potenti. Nulla consequat magna in nisl euismod, sed mollis velit bibendum. Aliquam in nulla lorem. </p>
                    </div>
                    <div className="services--content">
                        <div className="services--asset-container">
                            <div className="services--asset"></div>
                            <h3 className="services--asset-title">Visual Identity</h3>
                        </div>
                        <p className="services--content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu auctor nisi. Suspendisse potenti. Nulla consequat magna in nisl euismod, sed mollis velit bibendum. Aliquam in nulla lorem. </p>
                    </div>
                </motion.div>
                <div className="services__form-container">
                    <button className="services__form-button">TALK TO US</button>
                    <ContactForm />
                </div>
                <div className="services--header-container services--contact-header">
                    <HeaderArrow />
                    <motion.h2 className="services--header-title services--contact-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, dela: 0.5 }} >Contact</motion.h2>
                </div>
                <div className="services__contact-container">
                    <ul className="contact__list">
                        <li className="contact__list-item">
                            <p className="contact__name">Billy Myles-Berkouwer</p>
                            <div className="contact__links">
                                <a className="contact__link"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 58 58" width="29" height="29" xmlSpace="preserve" fill="#242424">
                                    <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001
                                    c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0
                                    s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013
                                    c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028
                                    c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58
                                    s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04
                                    C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217
                                    c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882
                                    C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972
                                    c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963
                                    c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028
                                    c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438
                                    c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036
                                    C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835
                                    c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072
                                    c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30
                                    H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318
                                    c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038
                                    c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972
                                    c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003
                                    c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z
                                    M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846
                                    z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781
                                    C44.177,52.078,38.672,54.958,32.521,55.763z"/>
                                </svg></a>
                                <a className="contact__link"><img className="contact__image contact__linkedIn" src='img/linkedin.png' /></a>
                            </div>
                        </li>
                        <li className="contact__list-item">
                            <p className="contact__name">Matt Congdon</p>
                            <div className="contact__links">
                                <a className="contact__link"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 58 58" width="29" height="29" xmlSpace="preserve" fill="#242424">
                                    <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001
                                    c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0
                                    s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013
                                    c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028
                                    c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58
                                    s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04
                                    C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217
                                    c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882
                                    C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972
                                    c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963
                                    c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028
                                    c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438
                                    c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036
                                    C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835
                                    c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072
                                    c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30
                                    H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318
                                    c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038
                                    c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972
                                    c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003
                                    c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z
                                    M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846
                                    z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781
                                    C44.177,52.078,38.672,54.958,32.521,55.763z"/>
                                </svg></a>
                                <a className="contact__link"><img className="contact__image contact__linkedIn" src='img/linkedin.png' /></a>
                            </div>
                        </li>
                        <li className="contact__list-item">
                            <p className="contact__name">Arran Baker</p>
                            <div className="contact__links">
                                <a className="contact__link"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 58 58" width="29" height="29" xmlSpace="preserve" fill="#242424">
                                    <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001
                                    c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0
                                    s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013
                                    c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028
                                    c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58
                                    s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04
                                    C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217
                                    c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882
                                    C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972
                                    c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963
                                    c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028
                                    c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438
                                    c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036
                                    C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835
                                    c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072
                                    c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30
                                    H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318
                                    c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038
                                    c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972
                                    c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003
                                    c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z
                                    M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846
                                    z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781
                                    C44.177,52.078,38.672,54.958,32.521,55.763z"/>
                                </svg></a>
                                <a className="contact__link"><img className="contact__image contact__linkedIn" src='img/linkedin.png' /></a>
                            </div>
                        </li>
                    </ul>
                    <div className="contact-logo-wrapper">
                        <svg width="700" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.53 255.46" className='contact__background'>
                            <path className="contact-logo-path" d="M490,165a39.73,39.73,0,0,1-5,11,72.26,72.26,0,0,1-8.42,11.08,57.21,57.21,0,0,1-9.43,8.3c-12,8.44-24.25,16.55-36.25,25-10.6,7.46-20.86,15.4-31.54,22.75-15.09,10.38-31.21,18.66-49.3,22.74-12.79,2.89-25.61,3.55-38.45,1-5.49-1.09-10.32-4-14.76-7.46a2.81,2.81,0,0,0-2.58-.15c-20.45,13.25-42.88,21.47-66.67,26.18-4.64.92-6.2,1.2-8.6,1.59-1.5.25,0,0-7,1-6.18.88-13,1-25,0-3.14-.59-6.29-1.12-9.41-1.78-23.53-5-45.37-14.46-66.73-25.2-5-2.5-9.94-5-14.81-7.74-2.84-1.58-5.46-3.54-8.2-5.3-4-2.6-8.14-5-12.06-7.77-3.43-2.4-6.66-5.09-10-7.68C46.09,217,29.56,198.83,20.28,175a83.46,83.46,0,0,1-4.9-43.32c1.18-7.77,4.23-15,8-22A136.09,136.09,0,0,1,52.92,73.41a158,158,0,0,1,78.67-38.17c12.92-2.29,25.95-2.36,38.86-1.43,17.05,1.23,33.48,5.54,47.3,16.32,5.75,4.48,10.64,10.07,16.4,15.62,5.77-2.11,12.47-4.7,19.26-7a199.49,199.49,0,0,1,44-9.85,276.23,276.23,0,0,1,38-1.72c21.74.8,42.84,5,61.5,17.22,9.7,6.35,19.26,12.93,28.95,19.3,4,2.6,6.29,3.59,11,6.56A235.86,235.86,0,0,1,459,106c8.74,7.06,13.11,10.58,17.34,15.67s8.82,8.1,12.71,20.74A55.28,55.28,0,0,1,491,155,44.26,44.26,0,0,1,490,165ZM325.79,264.18c16.75.06,30.52-3.91,43.84-9.59,17.83-7.59,32.88-19.64,48.54-30.71q15.65-11,31.57-21.68c10-6.7,20-13.36,27.29-23.22,4.94-6.71,8.49-14.08,8.92-22.56.58-11.41-4.12-20.93-11.23-29.46-8-9.55-17.75-17-28-23.95-13.61-9.24-27.35-18.28-41.07-27.35-5.16-3.42-10.28-6.93-15.66-10-17.58-10-36.91-13.49-56.79-14.47a181.14,181.14,0,0,0-21.22.5,231.3,231.3,0,0,0-76,18.65c-3.89,1.69-4.48,1.16-7.21-2.08-4.15-4.94-8.32-10.07-13.35-14-13.78-10.8-30.22-15.08-47.27-16.41a141.27,141.27,0,0,0-64.36,9.85C85,55.23,67.92,65.51,53.15,79.44c-10.78,10.18-20.23,21.5-26.73,34.87a81.82,81.82,0,0,0-6.92,20.2c-2.49,13.15.21,26,4.95,38.34,6.92,18,18.34,32.82,32.39,45.85,14.86,13.78,31.53,25,49.22,34.63,19.9,10.78,40.65,19.9,62.52,26.12a109,109,0,0,0,27.52,4.38A158,158,0,0,0,221,282a169.37,169.37,0,0,0,48-14.47c7.94-3.72,15.46-8.35,23.17-12.56,2.47-1.36,4.84-2.44,7.19.37a14.07,14.07,0,0,0,3.23,2.36A38.72,38.72,0,0,0,325.79,264.18Zm-106,13.15c-11.53.12-21.4-4.54-30.85-10.23a278.87,278.87,0,0,1-39.53-28.44c-8.75-7.63-17.5-15.37-25.33-23.89a300.47,300.47,0,0,1-21.62-27.19,129.77,129.77,0,0,1-19.34-38.42c-2.94-9.63-4.71-19.43-3.85-29.46.9-10.55,3.87-20.57,9.88-29.48,10.71-15.87,24.84-27.4,43.31-33,17-5.13,33.91-5.23,50,3.1,9.85,5.09,16.46,13.48,20.9,23.56,1.08,2.46-.1,4.18-2.05,5.72-4.49,3.53-9,7-13.27,10.83A73.82,73.82,0,0,0,170.17,124c-7.73,16.33-5.61,31.65,5.14,45.87,7.81,10.31,18.2,17.63,29.26,24,16,9.27,33.16,16.28,50.06,23.77,11,4.88,21.8,10.4,29.93,19.77,1.9,2.19,3.69,4.49,5.51,6.75,1.62,2,1.51,3.9-.55,5.55-8.67,6.94-17.94,13.07-28.26,17.13a250.37,250.37,0,0,1-26.85,8.46C229.7,276.58,224.67,276.69,219.79,277.33Zm-21-192A41.87,41.87,0,0,0,182.6,65.85c-11.16-7.13-23.62-9.09-36.39-7.16-22.5,3.41-40.38,14.71-52.87,33.84-7.45,11.4-11.09,23.92-9.57,37.77a97.92,97.92,0,0,0,8.87,30.87,192.51,192.51,0,0,0,25.56,40A217.05,217.05,0,0,0,149.79,233c12,9.71,24.57,18.8,37.39,27.41A99.74,99.74,0,0,0,208.71,271c9.3,3.38,18.94,1.53,28.33-.69A126,126,0,0,0,270.67,257c5.28-3,10.2-6.67,15.67-10.3-2.75-3.16-5-6.08-7.59-8.63-7.56-7.41-17-11.87-26.4-16.34-15.38-7.33-31-14.07-46.27-21.69a105.78,105.78,0,0,1-31-23.17C164.14,164.87,159.4,151.1,162,135.08s11.93-27.89,23.31-38.51C189.53,92.63,194.2,89.15,198.76,85.37Zm202.85,86.69a87.68,87.68,0,0,1-6.41,35.49c-9.05,22.14-24,38.54-47.68,45-8.88,2.41-18.32,2.69-26.4-3.48a29.29,29.29,0,0,1-5.69-5.76c-2.43-3.26-1.9-5.42,1.41-9.07a55.67,55.67,0,0,0,12.4-21.37c3.6-11.78.91-22.46-5.92-32.27S306.88,164.43,297,158.32c-10.71-6.59-21.56-13-31.84-20.22s-16.94-17.6-20.1-30c-1.58-6.18-3.48-12.28-5.17-18.43-1.16-4.18-.73-5.24,2.93-7.44a130.41,130.41,0,0,1,32.71-13.77,201,201,0,0,1,29-6.17c14.36-1.73,28.81-1.55,42.64,3.77,7.61,2.92,13.2,8.47,17.43,15.17,7.59,12,14.86,24.23,22.06,36.49C396.15,133.94,401.84,151.31,401.61,172.06Zm-4.09-.76c0-16.81-4.56-32.48-12.72-47-7.81-13.9-16.16-27.5-24.51-41.1A31.4,31.4,0,0,0,343.5,69.61c-13.39-4.64-27.11-4.74-40.94-2.77a157.56,157.56,0,0,0-38,10.27c-6.18,2.54-12.22,5.44-18.27,8.29-1.75.82-2.68,2-1.82,4.36,1.31,3.52,1.93,7.3,3.2,10.84,2.47,6.9,4.57,14,7.94,20.48,4.66,8.92,13.15,14.24,21.36,19.6,13,8.48,27.1,15.14,38.95,25.37,9.59,8.29,17.09,17.6,18.69,30.83,1.08,9,0,17.47-4.11,25.34-2.68,5.1-6.4,9.67-9.68,14.46-1,1.51-2.72,2.69-.9,4.87,5.55,6.66,12.7,8.87,21,7.63,3.19-.48,6.23-1.84,9.41-2.46,6.36-1.24,11.44-5,16.32-8.74,4.49-3.43,8.28-7.82,12.12-12,7.58-8.3,12.28-18.29,15.07-29C396,188.65,397.79,171.35,397.52,171.3Zm-84,38.76a30.45,30.45,0,0,1-3.46,15.62c-1.36,2.58-4.11,3.07-5.86.74-9.11-12.12-22.48-17.6-35.75-23.25-14.73-6.28-29.61-12.24-44.17-18.88a71.71,71.71,0,0,1-22.26-16.08c-7.65-8.06-11.94-17.57-10.91-28.87.8-8.87,4.77-16.57,10.05-23.61a75.76,75.76,0,0,1,5.29-6.42c2.19-2.32,4-1.86,5.12,1.1,2.55,6.73,4.67,13.66,7.79,20.12,3.49,7.25,9,13,15.62,17.77,10.27,7.43,22,12.07,33.18,17.67,8.09,4,16.31,7.94,23.95,12.74,6.94,4.38,13.38,9.69,17.51,17.14C312.16,200.38,313.92,205.09,313.55,210.06ZM208.16,114.64a21.66,21.66,0,0,0-1.9,2.06c-1.89,2.74-3.94,5.4-5.55,8.31-3.17,5.71-5.85,11.82-5.42,18.43.6,9.12,5.06,16.77,11.51,23.05a69.56,69.56,0,0,0,20,13.8c14.53,6.5,29.21,12.64,43.91,18.74,13.31,5.51,26.17,11.65,36.28,22.7,1.4-4.76,3.31-9.32,2.06-14.38-1.37-5.53-3.27-10.75-7.81-14.6-4-3.38-7.51-7.43-11.9-10.12C281.74,178,273.68,174,265.73,170c-10.26-5.26-21.07-9.38-30.71-16a61.76,61.76,0,0,1-17.48-17.17,46.06,46.06,0,0,1-4.22-7.73C211.46,124.53,210,119.82,208.16,114.64Z"
                                transform="translate(-14.42 -33.25)" stroke="rgb(236, 236, 236)" strokeWidth="1.5" fill="none" /></svg>
                    </div>
                </div>

                <h2 className="contact__message">Drop us an <span className="contact__highlight">email.</span><span><img src='img/globe.gif' className="contact__globe" /></span></h2>
            </div>
        </>

    );
}

export default Services;