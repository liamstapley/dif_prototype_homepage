function App() {
  return (
    <div className="bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded-bottom px-4 py-3 mb-4">
        <div className="container-fluid">
          <button className="navbar-brand fw-bold text-primary">ClearGrade</button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download">Download</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5 px-4 bg-white mb-5">
        <h1 className="display-4 fw-bold">AI Detection for Canvas, Made Easy.</h1>
        <p className="lead text-muted mt-3 mb-4">
          ClearGrade helps educators identify potentially AI-generated content in student submissions. Just install the extension and let the algorithm do the rest.
        </p>
        <a href="#download" className="btn btn-primary btn-lg shadow">Download for Free</a>
      </header>

      {/* Features */}
      <section id="features" className="container mb-5">
        <h2 className="text-center fw-bold mb-4">Key Features</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">AI Detection</h5>
                <p className="card-text">Scans PDFs and Docs for signs of AI-generated content using advanced language models.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Smart Highlighting</h5>
                <p className="card-text">Highlights suspicious passages and shows the likelihood of AI generation.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Canvas Integration</h5>
                <p className="card-text">Works directly with SpeedGrader—no new systems or processes to learn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-5 px-4">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Why ClearGrade?</h2>
          <p className="text-center lead text-muted">
            In the era of AI-generated content, maintaining academic integrity is more challenging than ever.
            ClearGrade empowers educators by providing a simple, reliable way to flag and understand suspicious content.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Get Started Now</h2>
          <p className="lead mb-4">Download the ClearGrade Chrome Extension and take control of your grading process.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-muted py-4 small bg-white">
        &copy; {new Date().getFullYear()} ClearGrade. Built by student innovators.
      </footer>
    </div>
  );
}

export default App;