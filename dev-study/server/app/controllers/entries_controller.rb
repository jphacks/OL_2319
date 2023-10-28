class EntriesController < ApplicationController
    before_action :set_entry, only: [:show, :edit, :update, :exit, :destroy]

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

    def exit
        @entry.exit_at = DateTime.now
        if @entry.save
            render json: @entry
        else
            render json: @entry.errors, status: :unprocessable_entity
        end
    end

    def destroy
      @entry.destroy
      render json: { message: 'Entry was successfully destroyed.' }, status: :ok
    end

    def active_entries
      @entries = Entry.where(exit_at: nil, channel_id: params[:channel_id])
      response = @entries.map do |entry|
        {
          id: entry.id,
          user_id: entry.user_id,
          entry_at: entry.entry_at,
          user_name: entry.user.name,
        }
      end
      render json: response, status: :ok
    end

    private

    def set_entry
      @entry = Entry.find(params[:id])
    end

    def entry_params
      params.require(:entry).permit(:channel_id, :user_id)
    end
  end
