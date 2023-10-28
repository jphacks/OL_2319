class Tag < ApplicationRecord
    belongs_to :channel_tag_rels
    has_many :channels, through: :channel_tag_rels
end
