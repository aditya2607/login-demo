import './output.css';
import demo from './assets/images/demo-form.webp';

function App() {
  return (
    <div class="flex h-screen" >
      <section class="hidden lg:block bg-neutral-900 flex-1">
        <div class="flex flex-col justify-center items-center h-full relative" >
          <h1 class="text-white	text-4xl text-center font-light mb-9">Sign up <br/>and come on in</h1>
          <div >
            <img alt="Typeform product sample" src={demo} class="max-w-[315px]"/>
          </div>
          <p class="text-white text-sm absolute bottom-4 mb-5">© Typeform</p>
        </div>
      </section>
      <section class="sc-6cea87e0-1 sc-bdb57cc3-1 itFDMt bZvDOr">
        <div class="sc-bdb57cc3-2 gUSzFV" >
          <div class="sc-bdb57cc3-3 dmMPQA" >
            <div class="sc-a9e82213-4 jVmqcp" >
              <div role="menu" class="sc-a9e82213-8 iVeRCb" ><a href="/signup/" role="menuitem" data-testid="language-item" class="sc-a9e82213-0 sc-a9e82213-5 ikAZaU cBqXF"><span href="/signup/" class="sc-a9e82213-1 sc-a9e82213-6 daWfLx bcYHMS">English</span></a><a href="/es/signup/" role="menuitem" data-testid="language-item" class="sc-a9e82213-0 sc-a9e82213-5 ikAZaU gWxfeL"><span href="/es/signup/" class="sc-a9e82213-1 sc-a9e82213-6 daWfLx bcYHMS">Español</span></a></div>
              <button class="sc-a9e82213-7 hZiXbG">
                <div class="sc-a9e82213-2 hxVXWp" >
                  <svg height="17" viewBox="0 0 20 20" width="17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z" fill="#5E5E5E" fill-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="sc-a9e82213-1 bfnwlE">English</span>
                <div class="sc-a9e82213-3 jClUTf" >
                  <svg fill="none" height="5" viewBox="0 0 9 5" width="9" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z" fill="#5E5E5E" fill-rule="evenodd"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div class="sc-2c2ab938-0 aNntR" >
            <p class="sc-2c2ab938-1 bwgtwM">Already have an account?</p>
            <div class="sc-9d706ad1-0 bJLdFb" ><a href="https://admin.typeform.com/login" class="sc-9d706ad1-1 cdXYNd">Log in</a></div>
          </div>
          <div class="sc-bdb57cc3-4 dnxiGH" >
            <div class="sc-bdb57cc3-5 fwwXdp" >
              <a aria-label="Typeform" href="/" title="Typeform" target="_top" class="sc-da9128ae-2 hbuBFL">
                <div class="sc-da9128ae-3 dDgngr" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none">
                    <path fill="currentColor" fill-rule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="sc-da9128ae-0 bmXElW">
                    <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" class="sc-da9128ae-1 bOQHzD">
                      <path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <h2 class="sc-bdb57cc3-7 fZkklZ">Get better data with conversational forms, surveys, quizzes &amp; more.</h2>
            <div class="sc-8647c37f-1 kRDunh signup-okta" id="okta-widget" >
              <main data-se="auth-container" tabindex="-1" id="okta-sign-in" class="d-block auth-container main-container no-beacon">
                <div class="okta-sign-in-header auth-header" >
                  <div data-type="beacon-container" class="beacon-container" ></div>
                </div>
                <div class="auth-content" >
                  <div class="auth-content-inner" >
                    <div class="registration" >
                      <form method="POST" action="/signup/" data-se="o-form" slot="content" id="form29" class="o-form o-form-edit-mode">
                        <div data-se="o-form-content" class="o-form-content o-form-theme clearfix" >
                          <h2 data-se="o-form-head" class="okta-form-title o-form-head">Get better data with conversational forms, surveys, quizzes &amp; more.</h2>
                          <div class="o-form-error-container o-form-has-errors" data-se="o-form-error-container" >
                            <div >
                              <div class="okta-form-infobox-error infobox infobox-error" role="alert" >
                                <span class="icon error-16"></span>
                                <p>We found some errors. Please review the form and make corrections.</p>
                              </div>
                            </div>
                          </div>
                          <div class="o-form-fieldset-container" data-se="o-form-fieldset-container" >
                            <div data-se="o-form-fieldset" class="o-form-fieldset o-form-label-top" >
                              <div data-se="o-form-input-container" class="o-form-input o-form-has-errors" >
                                <span data-se="o-form-input-email" class="o-form-input-name-email o-form-control okta-form-input-field input-fix o-form-has-errors"><input type="text" placeholder="Email" name="email" id="input38" value="" aria-label="Email" autocomplete="off" data-qa="field-email" class="" aria-describedby="input-container-error61" aria-invalid="true"/></span>
                                <p id="input-container-error61" class="okta-form-input-error o-form-input-error o-form-explain" role="alert"><span class="icon icon-16 error-16-small" role="img" aria-label="Error"></span>This field cannot be left blank</p>
                              </div>
                            </div>
                            <div data-se="o-form-fieldset" class="o-form-fieldset o-form-label-top" >
                              <div data-se="o-form-input-container" class="o-form-input o-form-has-errors" >
                                <span data-se="o-form-input-password" class="o-form-input-name-password o-form-control okta-form-input-field input-fix o-form-has-errors"><input type="password" placeholder="Password" name="password" id="input45" value="" aria-label="Password" autocomplete="off" data-qa="field-password" min-length="10" max-length="72" passwordrules="minlength: 10; maxlength: 72; required: lower; required: upper; required: digit; required: [!&quot;#$%&amp;'()*+,-./:;<=>?@[\]^_`{|}~];" aria-describedby="input-container-error62" aria-invalid="true"/><button type="button" class="o-form-input-password-toggle"><span class="o-form-input-eyeicon o-form-input-eyeicon-show" data-qa="reveal-password-button">Reveal password</span><span class="o-form-input-eyeicon o-form-input-eyeicon-hide" data-qa="hide-password-button">Hide password</span></button></span>
                                <p id="input-container-error62" class="okta-form-input-error o-form-input-error o-form-explain" role="alert"><span class="icon icon-16 error-16-small" role="img" aria-label="Error"></span>This field cannot be left blank</p>
                              </div>
                            </div>
                            <div id="subschemas-password" class="subschema" >
                              <div class="subschema-unsatisfied subschema-0" >
                                <p class="default-schema"><span class="icon icon-16"></span>At least 8 character(s)</p>
                              </div>
                              <div class="subschema-unsatisfied subschema-1" >
                                <p class="default-schema"><span class="icon icon-16"></span>At least 1 number(s)</p>
                              </div>
                              <div class="subschema-unsatisfied subschema-2" >
                                <p class="default-schema"><span class="icon icon-16"></span>At least 1 symbol(s)</p>
                              </div>
                              <div class="subschema-unsatisfied subschema-3" >
                                <p class="default-schema"><span class="icon icon-16"></span>Does not contain part of username</p>
                              </div>
                            </div>
                            <div id="custom-password-validation" ></div>
                            <span class="required-fields-label">* indicates required field</span>
                          </div>
                        </div>
                        <div id="okta-form-children" >
                          <label class="sc-39ef67a9-1 sc-39ef67a9-2 hbxMNP iovUGO checkbox-label" id="label-terms_and_consents"><input id="terms_and_consents" class="sc-39ef67a9-0 dtRSVL gdpr-checkbox" aria-labelledby="label-terms_and_consents" data-checked="false" data-field-id="terms_and_consents" data-testid="terms_and_consents" data-qa="field-terms_and_consents" type="checkbox"/>I agree to Typeform’s <a rel="noopener" target="_blank" href="https://www.typeform.com/terms-service/">Terms of Service</a>, <a rel="noopener" target="_blank" href="https://www.typeform.com/privacy-policy/">Privacy Policy</a> and <a rel="noopener" target="_blank" href="https://www.typeform.com/privacy-policy/">Data Processing Agreement</a>.</label>
                          <div class="subschema-unsatisfied visible" >
                            <p><span role="presentation" aria-label="Error"></span>Please accept the terms and conditions to finish the signup</p>
                          </div>
                          <div class="sc-446aec8b-0 ixkyal" >
                            <div data-marketing="false" data-tailor_to_needs_agreed="false" data-third_parties_agreed="false" data-field-id="consents-options" data-testid="consents-options" class="sc-446aec8b-2 kgbfwB" >
                              <p class="sc-446aec8b-1 jUtzFT">See options</p>
                              <span class="sc-446aec8b-3 jqwktG">
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"></path>
                                </svg>
                              </span>
                            </div>
                            <div aria-hidden="false" class="sc-8a3f566d-0 SEjbG" >
                              <div class="sc-8a3f566d-1 hmDPMZ" >
                                <div class="radio-toggle-group" >
                                  <div class="sc-39ef67a9-3 jHYAji" ><label id="marketing" class="sc-39ef67a9-4 suRJf">Get useful tips, inspiration, and offers via e-communication.</label></div>
                                  <div class="sc-39ef67a9-6 bFIJrf" >
                                    <div class="sc-747caa34-0 hYbokD" >
                                      <label class="sc-747caa34-1 lcIIfk">
                                        <input readonly="" aria-labelledby="marketing-Yes" data-testid="marketing" class="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc" aria-label="" type="radio" value=""/>
                                        <div class="sc-747caa34-2 kHWehz" >
                                          <p class="sc-39ef67a9-7 eIWats">Yes</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div class="sc-747caa34-0 hYbokD" >
                                      <label class="sc-747caa34-1 lcIIfk">
                                        <input readonly="" aria-labelledby="marketing-No" data-testid="marketing" class="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc" aria-label="" type="radio" value=""/>
                                        <div class="sc-747caa34-2 kHWehz" >
                                          <p class="sc-39ef67a9-7 kORYub">No</p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="radio-toggle-group" >
                                  <div class="sc-39ef67a9-3 jHYAji" ><label id="tailor_to_needs_agreed" class="sc-39ef67a9-4 suRJf">Tailor Typeform to my needs based on my activity.</label><a id="tailor_to_needs_agreed" href="/privacy-policy/" target="_blank" rel="noopener" class="sc-39ef67a9-5 cloxAA">See Privacy Policy</a></div>
                                  <div class="sc-39ef67a9-6 bFIJrf" >
                                    <div class="sc-747caa34-0 hYbokD" >
                                      <label class="sc-747caa34-1 lcIIfk">
                                        <input readonly="" aria-labelledby="tailor_to_needs_agreed-Yes" data-testid="tailor_to_needs_agreed" class="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc" aria-label="" type="radio" value=""/>
                                        <div class="sc-747caa34-2 kHWehz" >
                                          <p class="sc-39ef67a9-7 eIWats">Yes</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div class="sc-747caa34-0 hYbokD" >
                                      <label class="sc-747caa34-1 lcIIfk">
                                        <input readonly="" aria-labelledby="tailor_to_needs_agreed-No" data-testid="tailor_to_needs_agreed" class="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc" aria-label="" type="radio" value=""/>
                                        <div class="sc-747caa34-2 kHWehz" >
                                          <p class="sc-39ef67a9-7 kORYub">No</p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="radio-toggle-group" >
                                  <div class="sc-39ef67a9-3 jHYAji" ><label id="third_parties_agreed" class="sc-39ef67a9-4 suRJf">Enrich my data with select third parties for more relevant content.</label><a id="third_parties_agreed" href="/privacy-policy/" target="_blank" rel="noopener" class="sc-39ef67a9-5 cloxAA">See Privacy Policy</a></div>
                                  <div class="sc-39ef67a9-6 bFIJrf" >
                                    <div class="sc-747caa34-0 hYbokD" >
                                      <label class="sc-747caa34-1 lcIIfk">
                                        <input readonly="" aria-labelledby="third_parties_agreed-Yes" data-testid="third_parties_agreed" class="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc" aria-label="" type="radio" value=""/>
                                        <div class="sc-747caa34-2 kHWehz" >
                                          <p class="sc-39ef67a9-7 eIWats">Yes</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div class="sc-747caa34-0 hYbokD" >
                                      <label class="sc-747caa34-1 lcIIfk">
                                        <input readonly="" aria-labelledby="third_parties_agreed-No" data-testid="third_parties_agreed" class="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc" aria-label="" type="radio" value=""/>
                                        <div class="sc-747caa34-2 kHWehz" >
                                          <p class="sc-39ef67a9-7 kORYub">No</p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <p color="#7F7F7F" class="sc-446aec8b-1 dEXZxc">You can update your preferences in your Profile at any time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="o-form-button-bar" ><input class="button button-primary" type="submit" value="Create my free account" data-type="save" data-qa="button-submit"/></div>
                      </form>
                      <div class="auth-footer" ><a href="#" class="link help" data-se="back-link">Back to sign in</a></div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
