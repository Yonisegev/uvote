import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  link: string;
  fbIcon = faFacebookF;
  twitterIcon = faTwitter;
  whatsAppIcon = faWhatsapp;
  mailIcon = faEnvelope;

  ngOnInit(): void {
    console.log(window.location.href);
    const link = window.location.href;
    const endIndex = link.indexOf('/results');
    if (endIndex > 0) {
      this.link = link.slice(0, endIndex);
    } else this.link = link;
  }

  getShareLink(type: string): string {
    const link = this.link
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
      .writeText(this.link)
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
