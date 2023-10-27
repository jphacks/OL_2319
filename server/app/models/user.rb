class User < ApplicationRecord
    before_save :downcase_email

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    has_secure_password

    def downcase_email
        self.email = email.downcase
    end
end
