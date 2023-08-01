import { urls, personalInfoContact } from "../utils/constants";

/**
 * Create the HTML view of the contact page.
 * @returns {string} The HTML view of the contact page.
 */
function createContactView(): string {
  return /*html*/ `
    <header class="main-title">
      <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
    </header>
    <div class="contact-content-con">
      <section class="left-contact">
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
              <span class="icon-tooltip">github</span>
              <a href="${urls.github}" class="github-icon" target="_blank">
                <i class="fab fa-github github-icon"></i>
              </a>
            </div>
            <div class="icon">
              <span class="icon-tooltip">linkedin</span>
              <a href="${urls.linkedin}" class="linkedin-icon" target="_blank">
                <i class="fab fa-linkedin-in linkedin-icon"></i>
              </a>
            </div>
            <div class="icon">
              <span class="icon-tooltip">resume</span>
              <a href="${urls.resume}" class="resume-icon" target="_blank">
                <i class="fa-regular fa-address-card resume-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="right-contact">
        <form  action="https://formspree.io/f/xdovqgbr" method="POST" class="contact-form">
          <div class="input-control i-c-2">
            <input type="text" name="name" placeholder="Your name" title="Only characters are allowed" pattern="^(\s)*[A-Za-zÁáÉéÍíÓóÚúöäüÖÄÜ]+((\s)?((\'|\-|\.)?([A-Za-zÁáÉéÍíÓóÚúöäüÖÄÜ])+))*(\s)*$" required/>
            <input type="email" name="email" placeholder="Your email" title="Email allows '.', '+' and numbers" pattern="^[\\w\\._]{3,30}\\+?[\\w]{0,10}@[\\w\\.\\-]{3,}?\\.\\w{2,5}$" required/>
          </div>
          <div class="input-control">
            <input type="text" name="subject" placeholder="Email subject" title="Write an attractive email subject" pattern="^(?!(<\/?\\w+.*?>)).*$" required/>
          </div>
          <div class="input-control">
            <textarea
              name="message"
              id=""
              cols="15"
              rows="8"
              placeholder="Your message must have at least 50 characters long."
              minLength="50"
              pattern="^(?!(<\/?\\w+.*?>)).*$"
              required
            ></textarea>
          </div>
          <div class="submit-btn">
            <button class="main-btn" type="submit">
              <span class="btn-text">Submit</span>
              <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
            </button>
          </div>
        </form>
      </section>
    </div>
    `;
}

export default createContactView;