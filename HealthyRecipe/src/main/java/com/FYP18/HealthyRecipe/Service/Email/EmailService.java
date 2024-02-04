package com.FYP18.HealthyRecipe.Service.Email;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private SendGrid sendGrid;
  
    private final Email from = new Email("myhealthyrecipes23418@gmail.com");
    
    // only business / nutritionist will call these 2
    public void sendVerifiedEmail(String to) throws Exception{

        Email toEmail = new Email(to);
        String subject = "Healthy Recipe - registration accepted";
        String body ="Thank you for applying to Healthy Recipe! \nYour registration to Healthy Recipe is successful. You may now login to Healthy Recipe.\n"
                    +"\n\nThank you,\nHealthy Recipe Team";

        Content content = new Content("text/plain", body);
        Mail mail = new Mail(from, subject, toEmail, content);
        
        Request request = new Request();
        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());

        Response response = sendGrid.api(request);
        if (response.getStatusCode() >= 200 && response.getStatusCode() < 300) {
            System.out.println("Email sent successfully");
        } else {
            System.out.println("Error sending email. Status code: " + response.getStatusCode());
        }
    }
    public void sendRejectionEmail(String to) throws Exception{

        Email toEmail = new Email(to);
        String subject = "Healthy Recipe's registration rejected";
        String body ="Thank you for applying to Healthy Recipe! \nYour registration to Healthy Recipe is unsuccessful and is deleted.\n"
                    +"\n\nThank you,\nHealthy Recipe Team";

        Content content = new Content("text/plain", body);
        Mail mail = new Mail(from, subject, toEmail, content);

        Request request = new Request();
        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());

        Response response = sendGrid.api(request);
        if (response.getStatusCode() >= 200 && response.getStatusCode() < 300) {
            System.out.println("Email sent successfully");
        } else {
            System.out.println("Error sending email. Status code: " + response.getStatusCode());
        }
    }
    public void sendVerificationEmail(String to, String link) throws Exception {
        Email toEmail = new Email(to);
        String subject = "Sign up for Healthy Recipe - Email Verification";
        String body ="Thank you for applying to Healthy Recipe! \nPlease verify your email address to complete your registration by clicking the link below.\n"
                    +link  +"\n\nThank you,\nHealthy Recipe Team";

        Content content = new Content("text/plain", body);
        Mail mail = new Mail(from, subject, toEmail, content);

        Request request = new Request();
        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());

        Response response = sendGrid.api(request);
        if (response.getStatusCode() >= 200 && response.getStatusCode() < 300) {
            System.out.println("Email sent successfully");
        } else {
            System.out.println("Error sending email. Status code: " + response.getStatusCode());
        }
    }  
}
