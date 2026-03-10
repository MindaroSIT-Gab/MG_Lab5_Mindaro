import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="p-5 bg-white shadow rounded border text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="fw-bold">Page Not Found</h2>
      <p className="text-muted mb-4">
        The student resource you are looking for does not exist or has been moved. 
        Please check the URL or return to the main portal.
      </p>
      <Link to="/" className="btn btn-primary px-4 shadow-sm">
        Return to Dashboard
      </Link>
    </main>
  );
}

export default NotFound;
