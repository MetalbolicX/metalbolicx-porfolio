import { urls, personalInfoContact} from "../utils/constants";
/**
 * Create the information for contact.
 */
async function createContact(): Promise<HTMLDivElement> {
  const contact = document.createElement("div");
  contact.className = "contact-container";
  const view: string = /*html*/ `
    <div class="main-title">
      <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
    </div>
    <div class="contact-content-con">
      <div class="left-contact">
        <h4>Contact me here</h4>
        <p>
        Feel free to reach out to me for any inquiries or collaboration opportunities.
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
              <span>Location:</span>
            </div>
            <p>${personalInfoContact.location}</p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-envelope"></i>
              <span>Email:</span>
            </div>
            <p>
              <span>${personalInfoContact.email}</span>
            </p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-user-graduate"></i>
              <span>Education:</span>
            </div>
            <p>
              <span>${personalInfoContact.education}</span>
            </p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-phone"></i>
              <span>Mobile Number:</span>
            </div>
            <p>
              <span>${personalInfoContact.phone}</span>
            </p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-globe-africa"></i>
              <span>Languages:</span>
            </div>
            <p>
              <span>${personalInfoContact.languages}</span>
            </p>
          </div>
        </div>
        <div class="contact-icons">
          <div class="contact-icon">
            <a href="${urls.github}" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="${urls.linkedin}" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="${urls.resume}" target="_blank">
              <i class="fa-regular fa-address-card"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="right-contact">
        <form  action="https://formspree.io/f/xdovqgbr" method="POST" class="contact-form">
          <div class="input-control i-c-2">
            <input type="text" name="name" required placeholder="Your name" />
            <input type="email" name="email" required placeholder="Your email" />
          </div>
          <div class="input-control">
            <input type="text" name="subject" required placeholder="Enter subject" />
          </div>
          <div class="input-control">
            <textarea
              name="message"
              id=""
              cols="15"
              rows="8"
              required
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div class="submit-btn">
            <button class="main-btn" type="submit">
              <span class="btn-text">Submit</span>
              <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
            </button>
          </div>
        </form>
      </div>
    </div>
    `;
  contact.innerHTML = view;
  return contact;
}

export default createContact;
