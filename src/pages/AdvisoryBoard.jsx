import '../styles/page.css';

const tpcData = [
  "Prof. (Dr.) Partha Chaudhuri, Visiting Professor, School of Advanced Materials, Green Energy and Sensor Systems, IIEST, Shibpur",
  "Dr. Syed Minhaz Hossain, Associate Professor, Department of Physics, IIEST, Shibpur",
  "Dr. Sumita Mukhopadhyay, Assistant Professor, School of Advanced Materials, Green Energy and Sensor Systems, IIEST, Shibpur",
  "Prof. (Dr.) Sujit K. Biswas, Dean (Academic) & Professor, Dept. of Electrical Engg., St. Thomas' College of Engineering and Technology, Kolkata",
  "Prof. (Dr.) Samarjit Sengupta, Ex-Professor (Applied Physics Department), University of Calcutta",
  "Prof. (Dr.) Siddhartha Sankar Thakur, Professor, Department of Electrical Engineering, NIT Durgapur",
  "Prof. (Dr.) Pradip Kumar Sadhu, Professor (HAG) and Ex-Head, Department Of Electrical Engineering, IIT (ISM), Dhanbad",
  "Prof. (Dr.) Prithwiraj Purkait, Professor, Department of Power Engineering, Jadavpur University",
  "Dr. Ankush Bag, Assistant Professor, Department of Electronics and Electrical Engineering, IIT Guwahati",
  "Dr. Pritam Kumar Das, Associate Professor, Department of Mechanical Engineering, Aditya University",
  "Dr. Mithun Das, Assistant Professor, School of Nuclear Studies, Jadavpur University",
  "Dr. Arindam K. Sil, Associate Professor, Department of Electrical Engineering, Jadavpur University",
  "Dr. Sajjan Kumar, Assistant Professor, Department of Electrical and Electronics Engineering, SSN College of Engineering, Chennai",
  "Prof. (Dr.) Suman Chakraborty, Professor, Department of Mechanical Engineering & Sir J. C. Bose National Fellow, IIT Kharagpur",
  "Prof. (Dr.) Ranjan Ganguly, Professor, Department of Power Engineering, Jadavpur University",
  "Prof. (Dr.) Amitava Datta, Pro Vice-Chancellor, Jadavpur University",
  "Prof. (Dr.) Niladri Chakraborty, Professor, Department of Power Engineering, Jadavpur University",
  "Prof. (Dr.) Kaustuv Kanti Ganguli, Associate Professor, College of Interdisciplinary Studies, Zayed University",
  "Dr. Joydeep Munshi, Lead Scientist at GE Aerospace Research, Pennsylvania, United States",
  "Om B. Khadka, Project Lead & IT and Development Expert, HELVETAS Swiss",
  "Dr. Sudip Sinha, Technical Manager, The Linde Group",
  "Dr. Chirasree Roy Chowdhury, Associate Professor, Electronics and Telecommunication Engineering",
  "Dr. Ankita Pramanik, Associate Professor, Electronics and Telecommunication Engineering",
  "Dr. Prasun Chakrabarti, Dean - Engineering and Professor, CSE, Padampat Singhania University, Udaipur",
  "Prof. Dr. Dilip K. Banerjee, Former Pro VC, Central University of Jharkhand, Ranchi",
  "Dr. Goutam Panigrahi, Assistant Professor, NIT Durgapur",
  "Dr. Biswapati Jana, HOD Computer Science, Vidyasagar University",
  "Prof. Dr. Samarjit Kar, Professor, NIT Durgapur",
  "Dr. Amar Kishore, Assistant Professor, Magadh University",
  "Dr. Jagdish Chand Bansal, Associate Professor, South Asian University, New Delhi",
  "Dr. Rajneesh Talwar, Dean, Chitkara University",
  "Dr. Pawanesh Abrol, Professor and Head, Computer Science and IT, University of Jammu",
  "Dr. A. Lenin Fred, Principal, Mar Ephraem College of Engineering & Technology, Kanyakumari",
  "Dr. Narendra Gupta, Director Education, SKN Agriculture University, Rajasthan",
  "Prof. Dr. G.L. Sharma, Director, Sikkim Manipal Institute of Technology, Sikkim",
  "Anjan Saha, Scientist, DRDO",
  "Dr. Abhishek Das, Associate Professor, CSE, Aliah University, Kolkata",
  "Dr. Anirban Chakraborty, Scientist C, DRDO, Bangalore",
  "Dr. Subrata Kumar Ghosh, Professor, IIT(ISM), Dhanbad",
  "Dr. Niranjan Kumar, Associate Professor, IIT(ISM), Dhanbad",
  "Dr. Ankit Kotia, Assistant Professor, NIMS University, Jaipur, Rajasthan",
  "Dr. Ranjan Basak, Associate Professor, NIT Sikkim",
  "Dr. Biswajit Roy, Assistant Professor, NIT Sikkim",
  "Dr. Debajit Saha, Assistant Professor, NIT Sikkim",
  "Prof. (Dr.) Ranjay Hazra, Associate Professor, Department of ECE, NIT, Silchar",
  "Prof. (Dr.) Prabir Banerjee, Professor & Head, Department of Electronics and Communication Engineering, Heritage Institute of Technology, Kolkata",
  "Dr. Arpan Kumar Pradhan, Assistant Professor, Department of Electrical Engineering, Jadavpur University, Kolkata",
  "Prof. (Dr.) Anindita Kundu, Associate Professor, Software Systems, Vellore Institute of Technology, Vellore",
  "Prof. (Dr.) Sandip Bhattacharya, Professor & Head of ECE Department, SR University, Telengana",
  "Dr. Bikas Santra, Assistant Professor, School of AI and Data Science, IIT Jodhpur",
  "Prof (Dr.) Abhijit Bhowmick, Professor Grade 1, Communication Engineering, Vellore Institute of Technology, Vellore",
  "Dr. Jitendra Nath Bera, Professor, Electrical Engineering, Department of Applied Physics, University of Calcutta",
  "Dr. Kaushik Das Sharma, Professor, Electrical Engineering, Department of Applied Physics, University of Calcutta",
  "Prof. (Dr.) Diptendu Sinha Roy, Professor, Dean (R&C), National Institute of Technology Meghalaya",
  "Dr. Dilip Kumar Shaw, Associate Professor, National Institute of Technology Jamshedpur",
  "Dr. K. Hemant Kumar Reddy, Professor, Vellore Institute of Technology AP",
  "Dr. Sanjoy Choudhury, Scientist D, S. N. Bose National Centre for Basic Sciences",
  "Dr. Rabindra Kumar Barik, Associate Professor, KIIT University",
  "Dr. Ahin Banerjee, Lead Engineer, Mahindra & Mahindra, MRV Chennai",
  "Dr. Prosun Mandal, Assistant Professor, NIT Silchar",
  "Dr. Gourhari Ghosh, Assistant Professor, Department of Mechanical Engineering, IIT Jodhpur",
  "Dr. Ranjan Kumar Ghadai, Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal",
  "Dr. Subhas Chandra Mondal, Professor & Head, Department of Mechanical Engineering, IIEST Shibpur",
  "Dr. Bijan Kumar Mandal, Professor, Mechanical Engineering, IIEST Shibpur",
  "Dr. Sudip Ghosh, Associate Professor, Mechanical Engineering, IIEST Shibpur",
  "Dr. Apurba Das, Assistant Professor, Mechanical Engineering, IIEST Shibpur",
  "Dr. Kaustav Pradhan, Assistant Professor, Mechanical Engineering, IIEST Shibpur",
  "Dr. Arpan Kumar Mondal, Assistant Professor, Mechanical Engineering, NITTR Kolkata",
  "Dr. Nirmal Kumar Mandal, NITTR Kolkata",
  "Dr. Subrata Mondal, Associate Professor, Mechanical Engineering, NITTR Kolkata",
  "Dr. Uday S. Dixit, Professor, IIT Guwahati",
  "Dr. Abhinaba Chatterjee, Assistant Professor, BITS Pilani, K K Birla Goa Campus",
  "Dr. Pratik Chattopadhyay, Assistant Professor, Department of Computer Science and Engineering, IIT(BHU), Varanasi",
  "Dr. Soumen Moulik, Assistant Professor, Department of Computer Science and Engineering, NIT Meghalaya",
  "Prof. (Dr.) Partha Pratim Ray, Professor, Department of Physics, Jadavpur University",
  "Prof. (Dr.) Debasish Biswas, Professor, Department of Physics, Jadavpur University",
  "Prof. (Dr.) Puspendu Sahu, Professor, Department of Physics, Jadavpur University",
  "Prof. (Dr.) Kaustuv Das, Associate Professor, Department of Physics, Jadavpur University",
  "Prof. (Dr.) Saikat Kumar Seth, Associate Professor, Department of Physics, Jadavpur University",
  "Prof. (Dr.) Animesh Layek, Assistant Professor, Department of Physics, Jadavpur University",
  "Prof. (Dr.) Rituparna Mondal, Assistant Professor, Department of Physics, Jadavpur University"
];

export default function TechnicalProgramCommittee() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">TPC & REVIEWERS</span>
          <h1>National Advisory Committee</h1>
          <p>Distinguished experts and researchers contributing to the academic excellence of AICARE 2025.</p>
        </div>
      </div>

      <div className="page-body" style={{ maxWidth: '1400px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
          gap: '20px',
          justifyContent: 'center'
        }}>
          {tpcData.map((member, idx) => {
            const [name, ...details] = member.split(',');
            const affiliation = details.join(',').trim();

            return (
              <div 
                className="advisor-card" 
                key={idx} 
                style={{ 
                  margin: 0, 
                  padding: '24px', 
                  textAlign: 'left', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  borderTop: '4px solid #1a4a8a'
                }}
              >
                <div className="advisor-info">
                  <div className="advisor-name" style={{ 
                    fontSize: '19px', 
                    color: '#1a4a8a', 
                    fontWeight: '700',
                    marginBottom: '8px'
                  }}>
                    {name.trim()}
                  </div>
                  
                  <div style={{
                    height: '2px',
                    width: '30px',
                    background: '#e8a020',
                    marginBottom: '12px',
                    borderRadius: '2px'
                  }} />

                  <div className="advisor-org" style={{ 
                    fontSize: '13px', 
                    color: '#555', 
                    lineHeight: '1.6',
                    fontWeight: '500'
                  }}>
                    {affiliation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}