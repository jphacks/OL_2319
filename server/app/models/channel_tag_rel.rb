class ChannelTagRel < ApplicationRecord
    has_many :channels
    has_many :tags
end
