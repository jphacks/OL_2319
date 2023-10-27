class TagController < ApplicationController
  def create
    @tag = Tag.new(
      name: params[:name],
    )
    if @tag.save
      render json: @tag, status: 200
    else
      render status: 422
    end
  end

  def get_all
    @tags = Tag.all
    if @tags.present?
      render json: { tags: @tags }, status: 200
    else
      render status: 404
    end
  end

  def update
    @tag = Tag.find(params[:id])
    if @tag.update(name: params[:name])
      render json: @tag, status: 200
    else
      render status: 422
    end
  end
end