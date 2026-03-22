import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
interface ReasonforRequestData {
  StudentStudentName: string;
  StudentID: string;
  ReasonforRequest: string;
  BookTitle: string;
  Author: string;
  
}
function EventFeedback() {
const StudentNameRef = useRef<HTMLInputElement>(null);
  const StudentIDRef = useRef<HTMLInputElement>(null);
  const BookTitleRef = useRef<HTMLInputElement>(null);
  const AuthorRef = useRef<HTMLInputElement>(null);
  const ReasonforRequestRef = useRef<HTMLTextAreaElement>(null);

  const handleUncontrolledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (StudentNameRef.current && StudentIDRef.current && BookTitleRef.current && AuthorRef.current&& ReasonforRequestRef.current) {
      const data: ReasonforRequestData = {
        StudentStudentName: StudentNameRef.current.value,
        StudentID: StudentIDRef.current.value,
        BookTitle: BookTitleRef.current.value,
        Author: AuthorRef.current.value,
        ReasonforRequest: ReasonforRequestRef.current.value
      };
      console.log("Uncontrolled Form Data:", data);
      alert("Check the console for submitted data.");
    }
  };
  return(
    <section>
          <h2>Uncontrolled Form</h2>
          <form onSubmit={handleUncontrolledSubmit}>
            <div>
              <label>Student Name:</label><br/>
              <input type="text" required ref={StudentNameRef} />
            </div>
            <br/>
            <div>
              <label>Student ID:</label><br/>
              <input type="text" required ref={StudentIDRef} />
            </div>
            <br/>
            <div>
              <label>Book Title:</label><br/>
              <input type="text" required ref={BookTitleRef} />
            </div>
            <br/>
            <div>
              <label>Author:</label><br/>
              <input type="text" required ref={AuthorRef} />
            </div>
            <br/>
            <div>
              <label>Reason for Request:</label><br/>
              <textarea ref={ReasonforRequestRef} required />
            </div>
            <br/>
            <button type="submit" >Submit Uncontrolled Form</button>
          </form>
        </section>
  )
} 
export default EventFeedback;