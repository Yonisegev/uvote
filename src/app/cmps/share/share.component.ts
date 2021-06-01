import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  providers: [MessageService]
})
export class ShareComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  fbIcon = faFacebookF;
  twitterIcon = faTwitter;
  whatsAppIcon = faWhatsapp;
  mailIcon = faEnvelope;

  ngOnInit(): void {
    console.log(window.location.href);
  }

  getShareLink(type) {
    const link = window.location.href;
    switch (type) {
      case 'fb':
        return `https://www.facebook.com/sharer/sharer.php?u=${link}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${link}`;
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=Check this poll on Uvote!%20-%20${link}`;
      case 'email':
        return `mailto:?subject=Check this poll on Uvote!&body=${link}`;
      default:
        return link;
    }
  }

  onLinkCopy() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => this.showSuccess())
      .catch((e) => console.error(e));
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Link copied',
    });
  }
}
