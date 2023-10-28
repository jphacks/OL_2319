class Channel < ApplicationRecord
    has_many :channel_tag_rels
    has_many :tags, through: :channel_tag_rels
end
