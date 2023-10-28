class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(name: params[:name], email: params[:email], password: params[:password], is_deleted: false)
    if @user.save
      render status: 201
    else
      render json: { errors: "failed to create your account" }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      # ログイン成功
      render json: { id: user.id }, status: :ok
    else
      # ログイン失敗
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
