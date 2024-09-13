import React from 'react';

const CompanyInfo = () => {
    const companyName = "Iron Garbage Collectors";

    // Use arrays for multiple values
    const companyPhones = ["+9876543210", "+9876543210"];
    const companyWhatsapps = ["+9876543210", "+9876543210"];
    const companyEmails = ["contact@ironcollectors.com", "contact@secondemail.com"];

    return (
        <div className="company-info-page">
            <div className="glass-box">
                <h1 className="company-name">{companyName}</h1>

                {/* Phone numbers section */}
                <div className="company-detail">
                    <strong>Company Numbers:</strong>
                    <ul>
                        {companyPhones.map((phone, index) => (
                            <li key={index}>
                                <a href={`tel:${phone}`} className="link">
                                    {phone}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* WhatsApp numbers section */}
                <div className="company-detail">
                    <strong>WhatsApp Numbers:</strong>
                    <ul>
                        {companyWhatsapps.map((whatsapp, index) => (
                            <li key={index}>
                                <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="link">
                                    Message on WhatsApp ({whatsapp})
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Email addresses section */}
                <div className="company-detail">
                    <strong>Emails:</strong>
                    <ul>
                        {companyEmails.map((email, index) => (
                            <li key={index}>
                                <a href={`mailto:${email}`} className="link">
                                    {email}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Call to action */}
           
            </div>
        </div>
    );
};

export default CompanyInfo;
