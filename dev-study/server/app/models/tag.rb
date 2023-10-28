class Tag < ApplicationRecord
    has_many :channel_tag_rel
    has_many :channels, through: :channel_tag_rels
end
