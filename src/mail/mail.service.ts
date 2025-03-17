import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(to: string) {
    console.log('Sending email to:', to);
    await this.mailerService.sendMail({
      to,
      subject: 'Chào mừng bạn đến với hệ thống!',
      template: 'welcome',
      context: { userEmail: to },
    });
  }
}
