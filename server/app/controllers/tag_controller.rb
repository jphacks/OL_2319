class TagController < ApplicationController
  def create
    @tag = Tag.new(
      name: params[:name],
    )
    
    if @tag.save
      render json: { status: 201 }
    else
      render json: { status: 200 }
    end
  end
end
