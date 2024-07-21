import React from 'react'
import Layout from '../components/layout/layout'

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        Welcome to E-Comm, your go-to destination for a seamless and enjoyable online shopping experience. We offer a diverse range of high-quality products at competitive prices, from the latest fashion trends and electronics to home essentials and unique gifts.

                        We provide a wide product range with thousands of items across various categories and exclusive deals with special offers and discounts for our app users. Our personalized recommendations ensure that you find products tailored to your preferences, and our secure payments feature multiple safe payment options for a hassle-free checkout.

                        Enjoy fast shipping with reliable delivery and order tracking, and shop confidently with our easy return policy. Our app boasts an intuitive navigation design for easy shopping, advanced search features to find products quickly, and a wishlist to save items for later. Stay updated on deals and orders with push notifications and make informed decisions with customer reviews. Our 24/7 support team is always ready to assist you with any questions or issues.

                        Thank you for choosing E-Comm. Happy shopping!
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About