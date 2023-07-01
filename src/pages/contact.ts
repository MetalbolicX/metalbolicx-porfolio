import { urls, personalInfoContact} from "../utils/constants";
/**
 * Create the information for contact.
 */
async function createContact(): Promise<HTMLElement> {
  const contact: HTMLElement = document.createElement("section");
  contact.classList.add("container");
  contact.classList.add("contact");
  contact.classList.add("active");
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
            <div class="icon">
              <span class="icon-tooltip github-icon">github</span>
              <a href="${urls.github}" class="github-icon" target="_blank">
                <i class="fab fa-github github-icon"></i>
              </a>
            </div>
            <div class="icon">
              <span class="icon-tooltip linkedin-icon">linkedin</span>
              <a href="${urls.linkedin}" class="linkedin-icon" target="_blank">
                <i class="fab fa-linkedin-in linkedin-icon"></i>
              </a>
            </div>
            <div class="icon">
              <span class="icon-tooltip resume-icon">resume</span>
              <a href="${urls.resume}" class="resume-icon" target="_blank">
                <i class="fa-regular fa-address-card resume-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="right-contact">
        <form  action="https://formspree.io/f/xdovqgbr" method="POST" class="contact-form">
          <div class="input-control i-c-2">
            <input type="text" name="name" required placeholder="Your name" />
            <input type="email" name="email" pattern="[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?" title="Invalid email address" required placeholder="Your email" />
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
