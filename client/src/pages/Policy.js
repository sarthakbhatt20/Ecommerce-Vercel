import React from 'react'
import Layout from '../components/layout/layout'

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p>At E-Comm, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.

                        We collect personal information such as your name, email address, phone number, shipping address, and payment details. Additionally, we gather usage data, including information on how you interact with our app, your browsing history, and purchase behavior. We also collect data about the device you use to access our app, such as your IP address and device type.

                        We use this information to process orders, improve your shopping experience, and communicate with you about your orders, products, and promotional offers. We implement strict security measures to protect your data from unauthorized access, disclosure, or alteration.

                        We do not sell or share your personal information with third parties, except as necessary to provide our services, comply with the law, or protect our rights. By using our app, you agree to the terms of this Privacy Policy.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Policy