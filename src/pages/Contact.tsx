function Contact() {
  return (
    <main className="p-4 bg-white shadow rounded border text-start mx-auto" style={{maxWidth: '550px'}}>
      <h2 className="text-primary mb-3">IT Support Desk</h2>
      <p className="text-muted small mb-4">Please fill out the form below to report a technical issue.</p>
      
      <form>
        <div className="mb-3">
          <label className="form-label fw-bold small">Student ID Number</label>
          <input type="text" className="form-control" placeholder="e.g. 2024-10001" required />
        </div>
        
        <div className="mb-3">
          <label className="form-label fw-bold small">Issue Category</label>
          <select className="form-select">
            <option>Portal Login Difficulty</option>
            <option>Wi-Fi / Network Connection</option>
            <option>Course Enrollment Error</option>
            <option>Hardware/Library PC Issue</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold small">Describe the Problem</label>
          <textarea className="form-control" rows={3} placeholder="Please provide details..."></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold shadow-sm">
          Submit Technical Issue
        </button>
      </form>
    </main>
  );
}

export default Contact;
