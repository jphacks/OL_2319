class EntriesController < ApplicationController
    before_action :set_entry, only: [:show, :edit, :update, :destroy]

    def index
      @entries = Entry.all
      render json: @entries
    end
  
    def show
      render json: @entry
    end
  
    def create
        @entry = Entry.new(entry_params.merge(entry_at: DateTime.now))
        if @entry.save
            render json: @entry, status: :created
        else
            render json: @entry.errors, status: :unprocessable_entity
        end
    end
  
    def update
        @entry.exit_at ||= DateTime.now if params[:exit]
        if @entry.update(entry_params)
            render json: @entry
        else
            render json: @entry.errors, status: :unprocessable_entity
        end
    end
  
    def destroy
      @entry.destroy
      render json: { message: 'Entry was successfully destroyed.' }, status: :ok
    end
  
    private
  
    def set_entry
      @entry = Entry.find(params[:id])
    end
  
    def entry_params
      params.require(:entry).permit(:channel_id, :user_id)
    end
  end
  