export type PrivacySettings = {
    restrict_export_data: boolean;
    privacy_warning_provider: string;
    emails_privacy_disclaimer: {
        html: string;
        is_enabled: boolean;
    };
    mail_blast_privacy_message: {
        html: string;
        is_enabled: boolean;
    };
    disable_share_button_on_board: boolean;
    block_mail_blast_auto_approval: boolean;
    block_mail_blast_quick_approval: boolean;
};
