defmodule HelloWeb.ExampleLive do
  use HelloWeb, :live_view

  def render(assigns) do
    ~H"""
    <div class="font-sans bg-cyan-400">
      Hello, font-sans.
    </div>

    <div class="font-mono bg-lime-400">
      Hello, font-mono.
    </div>

    <div>
      <ix-button class="m-1" variant="primary">Button</ix-button>
      <ix-button class="m-1" variant="primary" disabled>Button</ix-button>
    </div>
    """
  end
end
