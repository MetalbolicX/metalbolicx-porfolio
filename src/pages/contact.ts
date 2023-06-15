import { cvUrl} from "../utils/constants";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          laborum numquam? Quam excepturi perspiciatis quas quasi.
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
              <span>Location</span>
            </div>
            <p>: London, united Kingdom</p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-envelope"></i>
              <span>Email</span>
            </div>
            <p>
              <span>: maclinzuniversal@gmail.com</span>
            </p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-user-graduate"></i>
              <span>Education</span>
            </div>
            <p>
              <span>: Sussex University, East Sussex</span>
            </p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-user-graduate"></i>
              <span>Mobile Number</span>
            </div>
            <p>
              <span>: 07522670617</span>
            </p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fas fa-globe-africa"></i>
              <span>Languages</span>
            </div>
            <p>
              <span>: Afrikaans, English, Spanish</span>
            </p>
          </div>
        </div>
        <div class="contact-icons">
          <div class="contact-icon">
            <a href="www.facebook.com" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fab fa-youtube"></i>
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
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div class="submit-btn">
            <a href="${cvUrl}" class="main-btn">
              <span class="btn-text">Download CV</span>
              <span class="btn-icon"
                ><i class="fas fa-download"></i
              ></span>
            </a>
          </div>
          <div class="submit-btn">
            <button class="email-btn" type="submit">
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
