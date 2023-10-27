require 'test_helper'

class TagControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tag_create_url
    assert_response :success
  end

end
