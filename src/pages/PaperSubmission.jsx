import '../styles/page.css';

export default function PaperSubmissionStyled() {
  return (
    <div className="page-wrapper">

      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">AICARE 2025</span>
          <h1>Guidelines for Submission of Manuscripts</h1>
          <p style={{ color: '#f5b83d' }}>
            Submit your research and be part of a global IEEE conference
          </p>
        </div>
      </div>

      <div className="page-body">

        {/* INTRO */}
        <div className="page-card">
          <p>
            Prospective authors are invited to submit original technical papers for publication in the AICARE 2025 Conference Proceedings and for presentation at the Conference.
          </p>

          <p style={{ marginTop: 12 }}>
            Authors must submit their manuscripts using <strong style={{ color: '#0056b3' }}>CMT (Conference Management Toolkit)</strong> link on or before <strong style={{ color: '#e63946' }}>January 20, 2025 23:59 hrs AoE (Anywhere on Earth)</strong>. All manuscripts will be double-blind reviewed for technical content and scope by a technical program committee.
          </p>

          {/* BUTTON */}
          <div style={{ marginTop: 20 }}>
            <button 
              className="page-btn"
              onClick={() => alert('Upcoming soon')}
            >
              ➤ Link for PAPER SUBMISSION
            </button>
          </div>
        </div>

        {/* WARNING */}
        <div className="page-card" style={{ borderTop: '4px solid #e63946' }}>
          <p>
            Please note that AICARE 2025 will follow a <strong>double-blind review process</strong>. Papers that do not conform with our double-blind submission policies will be <strong style={{ color: '#e63946' }}>rejected without review</strong>.
          </p>
        </div>

        {/* GUIDELINES */}
        <div className="page-card">
          <h2 style={{ color: '#1a4a8a', marginBottom: 16 }}>Guidelines for Preserving Anonymity with Double-Blind Submission</h2>

          <ul className="page-list">
            <li style={{ marginBottom: 10 }}>
              Remove the names and affiliations of authors from the title page of the PDF file. This information needs to be included in the final camera ready manuscript if your paper gets accepted. During the review manuscript submission, include all author details only at the CMT portal. The PDF file of the review manuscript should not have author information.
            </li>
            <li style={{ marginBottom: 10 }}>
              Remove acknowledgments of identifying names and funding sources from the PDF file that you will submit for review. This information can be included in the final camera ready manuscript if your paper gets accepted.
            </li>
            <li style={{ marginBottom: 10 }}>
              Remove project titles or names that can be used to trace back to the authors via a web search engine.
            </li>
            <li style={{ marginBottom: 10 }}>
              Use care in naming your files. Source file names (e.g., 'Alice-n-Bob.dvi') are often embedded in the final output as accessible comments.
            </li>
            <li style={{ marginBottom: 10 }}>
              Use care in referring to your previous works as related works. Instead of 'In a previous work [10], we have presented...', use 'In a previous work [10], the authors have presented...' or 'XYZ et al. [10] have presented...'
            </li>
            <li>
              Papers with the same title and abstract should not be posted on a public website, such as arxiv.org, or transmitted via public mailing lists.
            </li>
          </ul>
        </div>

        {/* REQUIREMENTS */}
        <div className="page-card">
          <h2 style={{ color: '#1a4a8a', marginBottom: 16 }}>Your Paper Must Comply With The Following</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <p><strong style={{ color: '#333' }}>Paper Length:</strong><br/>Maximum 6 pages</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: '#333' }}>Paper Size:</strong><br/>US Letter (8.5" x 11")</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: '#333' }}>Fonts:</strong><br/>Embed ALL fonts in PDF. Avoid Type 3 fonts</p>
            </div>

            <div>
              <p><strong style={{ color: '#333' }}>File Format:</strong><br/>Adobe PDF (.pdf)</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: '#333' }}>Allowed File Size:</strong><br/>2.0 MB</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: '#333' }}>Page Numbering:</strong><br/>Do NOT page number your paper</p>
            </div>
          </div>
        </div>

        {/* TEMPLATES */}
        <div className="page-card">
          <h2 style={{ color: '#1a4a8a', marginBottom: 16 }}>Templates Can Be Downloaded From The Following Links</h2>

          <h3 style={{ color: '#0056b3' }}>Microsoft Word</h3>
          <div style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/conference-template-letter.docx" download className="page-btn">
              ↓ US Letter(DOC, 30 KB) Updated 2024
            </a>
            <a href="/conference-template-a4.docx" download className="page-btn outline">
              ↓ A4(DOC, 30 KB) Updated 2024
            </a>
          </div>

          <h3 style={{ color: '#0056b3', marginTop: 24 }}>LaTeX</h3>
          <div style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#" className="page-btn">
              ↓ Template(ZIP, 700 KB) Updated 2024
            </a>
            <a href="/IEEEtranBST2.zip" download className="page-btn outline">
              ↓ LaTeX Bibliography Files(ZIP, 309 KB)
            </a>
          </div>

          <h3 style={{ color: '#0056b3', marginTop: 24 }}>Overleaf</h3>
          <p style={{ marginTop: 10 }}>
            When working in Overleaf, the template is available at{' '}
            <a href="https://www.overleaf.com/gallery/tagged/ieee-official" target="_blank" rel="noreferrer" style={{ color: '#0056b3', textDecoration: 'underline' }}>
              https://www.overleaf.com/gallery/tagged/ieee-official
            </a>
          </p>
        </div>

        {/* NOTES */}
        <div className="page-card">
          <h2 style={{ color: '#1a4a8a', marginBottom: 16 }}>Important Notes</h2>

          <h3 style={{ color: '#333' }}>CMT Registration Requirements:</h3>
          <p style={{ marginBottom: 16, marginTop: 6 }}>
            During the initial manuscript submission process via CMT, it is the authors' responsibility to ensure that all the authors' names are included in the CMT submission page, and NOT in the PDF file. The CMT registration page must include all co-authors. Failure to comply with this rule might result in your paper being withdrawn from the review process. The author list of an accepted paper cannot be changed in the final manuscript.
          </p>

          <h3 style={{ color: '#333' }}>Submission Requirements:</h3>
          <p style={{ marginBottom: 16, marginTop: 6 }}>
            All submissions should be written in English with a maximum page length of SIX (6) printed pages for the regular paper track. Papers should be in PDF format, two columns, (minimum 10-point font) or greater and compliant with other AICARE 2025 manuscript guidelines. Standard IEEE conference templates for LaTeX and Microsoft Word formats can be used.
          </p>

          <h3 style={{ color: '#333' }}>Archival Policy:</h3>
          <p style={{ marginTop: 6 }}>
            All accepted and presented papers will be included in AICARE 2025 Conference Proceedings and digitally archived through IEEE Xplore. The IEEE reserves the right to exclude a paper from distribution after the conference (including its removal from IEEE Xplore) if the paper is not presented at the conference.
          </p>
        </div>

        {/* IEEE POLICY */}
        <div className="page-card" style={{ borderTop: '4px solid #e63946' }}>
          <h2 style={{ color: '#e63946', marginBottom: 16 }}>Important IEEE Policy Announcement</h2>

          <p>
            Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and the IEEE Communications society will take action against any author who engages in either practice.
          </p>

          <div style={{ marginTop: 20, display: 'flex', gap: 15, flexWrap: 'wrap' }}>
            <a href="https://www.ieee.org/publications/rights/plagiarism" target="_blank" rel="noreferrer" className="page-btn">
              IEEE Policy on Plagiarism →
            </a>

            <a href="https://www.ieee.org/publications/rights/multi-sub-guidelines-intro" target="_blank" rel="noreferrer" className="page-btn outline">
              IEEE Policy on Double Submission →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}