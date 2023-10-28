class ChannelTagRel < ApplicationRecord
    has_many :channels
    belongs_to :tag
end
