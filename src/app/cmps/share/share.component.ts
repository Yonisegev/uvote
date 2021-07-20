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
  constructor(private messageService: MessageService) { }
  link: string;
  socialLink: string;
  fbIcon = faFacebookF;
  twitterIcon = faTwitter;
  whatsAppIcon = faWhatsapp;
  mailIcon = faEnvelope;

  ngOnInit(): void {
    const link = window.location.href;
    const hashIdx = link.indexOf('#')
    const linkStart = link.substring(0, hashIdx)
    const linkEnd = link.slice(hashIdx + 1)
    const shareLink = `${linkStart}%23${linkEnd}`

    const endIndex = link.indexOf('/results');
    if (endIndex > 0) {
      this.link = link.slice(0, endIndex);
      this.socialLink = shareLink.slice(0, endIndex)
    } else {
      this.link = link;
      this.socialLink = shareLink
    }
  }

  getShareLink(type: string): string {
    const link = this.link
    const socialLink = this.socialLink
    switch (type) {
      case 'fb':
        return `https://www.facebook.com/sharer/sharer.php?u=${socialLink}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${socialLink}&text=Check this poll on Uvote!`;
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=Check this poll on Uvote!%20-%20${socialLink}`;
      case 'email':
        return `mailto:?subject=Check this poll on Uvote!&body=${socialLink}`;
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
