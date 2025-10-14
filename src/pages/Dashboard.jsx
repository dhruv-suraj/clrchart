import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const patientData = {
    name: 'Jane Doe',
    dob: '01/23/1970',
    vitals: {
      bloodPressure: '128/87',
      heartRate: '79'
    },
    diagnoses: [
      'Chronic Systolic Heart Failure',
      'Coronary artery disease',
      'Type 2 diabetes',
      'Hypertension',
      'Hyperlipidemia'
    ],
    medications: [
      'Lisinopril 20mg daily',
      'Metoprolol XL 50mg daily',
      'Spironolactone 25mg daily',
      'Atorvastatin 20mg daily',
      'Aspirin 81mg daily'
    ],
    procedures: [
      { name: 'Echocardiogram', date: '03/04/25' },
      { name: 'Left Heart Catheterization', date: '01/02/25' },
      { name: 'Nuclear Stress Test', date: '12/15/2025' }
    ],
    labWork: [
      { name: 'Sodium', value: '138', unit: 'mEq/L', normal: true },
      { name: 'Potassium', value: '3.9', unit: 'mEq/L', normal: true },
      { name: 'BUN', value: '31', unit: 'mg/dL', normal: false },
      { name: 'Creatinine', value: '1.12', unit: 'mg/dL', normal: true },
      { name: 'Glucose', value: '146', unit: 'mg/dL', normal: false }
    ]
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      // Simulate bot response
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          text: 'Thank you for your question. I can help you understand your medical records and health information.',
          sender: 'bot'
        }]);
      }, 1000);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header drop-header">
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="10" width="8" height="30" rx="2" fill="#4ECDC4"/>
              <rect x="10" y="20" width="18" height="8" rx="2" fill="#4ECDC4"/>
              <path d="M19 15 Q 19 10, 24 12 T 28 18" stroke="#4ECDC4" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h1 className="dashboard-title">ClearChartAI</h1>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Left Column - Patient Info */}
        <div className="left-column">
          <div className="card patient-info-card drop-card delay-1">
            <h2 className="patient-name">{patientData.name}</h2>
            <p className="patient-dob"><strong>DOB:</strong> {patientData.dob}</p>

            <div className="vitals-section">
              <h3>Most recent Vitals:</h3>
              <p>Blood Pressure {patientData.vitals.bloodPressure}</p>
              <p>Heart Rate {patientData.vitals.heartRate}</p>
            </div>

            <div className="diagnoses-section">
              <h3>Diagnoses</h3>
              <ul>
                {patientData.diagnoses.map((diagnosis, index) => (
                  <li key={index}>{diagnosis}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Center Column - ChatBot and Medications */}
        <div className="center-column">
          <div className="card chatbot-card drop-card delay-2">
            <h2>ChatBot</h2>
            <p className="chatbot-subtitle">Ask Clari about your health</p>

            <div className="chat-messages">
              {chatMessages.length === 0 ? (
                <p className="chat-placeholder">Start a conversation with Clari...</p>
              ) : (
                chatMessages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    {msg.text}
                  </div>
                ))
              )}
            </div>

            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
              />
              <button type="submit" className="chat-send-btn">Send</button>
            </form>
          </div>

          <div className="card medications-card drop-card delay-4">
            <h3>Medications</h3>
            <ul>
              {patientData.medications.map((medication, index) => (
                <li key={index}>{medication}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Medical Records, Procedures, Lab Work */}
        <div className="right-column">
          <div className="card medical-records-card drop-card delay-3">
            <button className="medical-records-btn">
              Ask Clari to get your medical records
            </button>
          </div>

          <div className="card procedures-card drop-card delay-5">
            <h3>Procedures/Imaging</h3>
            <ul>
              {patientData.procedures.map((procedure, index) => (
                <li key={index}>
                  {procedure.name} {procedure.date}
                </li>
              ))}
            </ul>
          </div>

          <div className="card labwork-card drop-card delay-6">
            <h3>Last Lab Work</h3>
            <ul className="lab-results">
              {patientData.labWork.map((lab, index) => (
                <li key={index} className={!lab.normal ? 'abnormal' : ''}>
                  <span className="lab-name">{lab.name}</span>
                  <span className="lab-value">{lab.value} {lab.unit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
