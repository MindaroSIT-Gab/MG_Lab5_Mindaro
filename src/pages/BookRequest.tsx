import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
interface ReasonforRequestData {
  StudentStudentName: string;
  StudentID: string;
  ReasonforRequest: string;
  BookTitle: string;
  Author: string;
  
}


function BookRequest() {
    const [StudentStudentName, setStudentStudentName] = useState<string>("");
  const [StudentID, setStudentID] = useState<string>("");
  const [ReasonforRequest, setReasonforRequest] = useState<string>("");
  const [BookTitle, setBookTitle] = useState<string>("");
  const [Author, setAuthor] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<ReasonforRequestData | null>(null);
  
  const handleControlledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: ReasonforRequestData = { StudentStudentName, StudentID,  BookTitle, Author, ReasonforRequest };
    
    setSubmittedData(data);
    setStudentStudentName("");
    setStudentID("");
    setBookTitle("");
    setAuthor("");
    setReasonforRequest("");
  };
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Student Book Request</h1>

      
      <section>
        <h2>Controlled Form</h2>
        <form onSubmit={handleControlledSubmit}>
          <div>
            <label>Student Name:</label><br/>
            <input
              type="text"
              value={StudentStudentName} required
              onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentStudentName(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label>Student ID:</label><br/>
            <input
              type="text"
              value={StudentID} required
              onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentID(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label>Book Title:</label><br/>
            <input
              type="text"
              value={BookTitle} required
              onChange={(e: ChangeEvent<HTMLInputElement>) => setBookTitle(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label>Author:</label><br/>
            <input
              type="text"
              value={Author} required
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label>Reason for Request:</label><br/>
            <textarea
              value={ReasonforRequest} required
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setReasonforRequest(e.target.value)}
            />
          </div>
          <br/>
          <button type="submit">Submit Controlled Form</button>
        </form>

        
        {submittedData && (
          <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
            <h3>Submitted ReasonforRequest</h3>
            <p><strong>StudentName:</strong> {submittedData.StudentStudentName}</p>
            <p><strong>StudentID:</strong> {submittedData.StudentID}</p>
            <p><strong>BookTitle:</strong> {submittedData.BookTitle}</p>
            <p><strong>Author:</strong> {submittedData.Author}</p>
            <p><strong>ReasonforRequest:</strong> {submittedData.ReasonforRequest}</p>
          </div>
        )}
      </section>

      <hr style={{ margin: "40px 0" }}/>
    </div>
  )
}
export default BookRequest;